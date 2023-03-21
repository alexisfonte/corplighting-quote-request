require 'rest-client'

def api_key
     ENV["CLAV_FLEX_API_KEY"]
 end

# Category.destroy_all
# Item.destroy_all

puts "Getting inventory categories..."

    def categories_dataset
        categories = RestClient.get("https://cla.flexrentalsolutions.com/f5/api/inventory-group/list", { 'X-Auth-Token' => api_key })
        categories_array = JSON.parse(categories)
        puts "Creating categories..."
        categories_array.each do |category|
            Category.create!(
                name: category["name"],
                flex_id: category["id"],
                path: category["fullDisplayString"],
                # parent_category: category["parentGroupId"]
            )
        end
        categories_array.each do |category|
        puts "Nesting categories..."
            if category["parentGroupId"]
                puts "finding parent"
                parent = Category.find_by(flex_id: category["parentGroupId"])
                puts "finding self"
                child_category = Category.find_by(flex_id: category["id"])
                puts "assigning nest"
                child_category.update!(parent_category_id: parent.id)
            end
        end
        puts "Successfully seeded #{Category.count} categories!"
    end
# categories_dataset()


def item_dataset
    all_items = []

    puts "Getting Inventory Worksheet..."
        items = RestClient.get("https://cla.flexrentalsolutions.com/f5/api/inventory-worksheet?page=0&size=500", { 'X-Auth-Token' => api_key })
        items_array = JSON.parse(items)
        
    puts "Getting page 0 of #{items_array['totalPages']}..."
        items_array['content'].each do |item|
            all_items << item
        end
        x = 1
        while x <= items_array['totalPages']
            puts "Getting page #{x} of #{items_array['totalPages']}..."
            inventory = RestClient.get("https://cla.flexrentalsolutions.com/f5/api/inventory-worksheet?page=#{x}&size=500", { 'X-Auth-Token' => api_key })
            inventory_array = JSON.parse(inventory)
            inventory_array['content'].each do |item|
                all_items << item
            end
            x += 1
        end

        puts "Creating items..."
            all_items.uniq.each do |item|
                if Item.exists?(:flex_id => item['id'])
                    puts "#{item['name']} already exists"
                else
                    puts "Getting image for #{item['name']}"
                    image = RestClient.get("https://cla.flexrentalsolutions.com/f5/api/inventory-model/#{item['id']}/imageUrl", { 'X-Auth-Token' => api_key })
                    puts "Creating item #{all_items.uniq.index(item)} of #{all_items.uniq.count}"
                    Item.create!(
                        name: item['name'], 
                        size: item['size'],
                        description: item['narrativeDescription'],
                        category_id: Category.find_by(name: item['groupName']).id,
                        flex_id: item['id'],
                        image_id: image
                    )

                end
            end
        puts "Successfully seeded #{Item.count} items!"
    end
item_dataset()