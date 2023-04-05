class ItemsController < ApplicationController

    def index
        items = Item.paginate(page: params[:page])
        render json: {
            items: items,
            page: items.current_page,
            pages: items.total_pages
        }, status: :ok
    end

    def show
        item = Item.find(params[:id])
        render json: item, status: :ok
    end

    # get all items for customer browsing 
    def browse
        inventory = Item.customer_inventory.paginate(page: params[:page])
        render json: {
            inventory: inventory,
            page: inventory.current_page,
            pages: inventory.total_pages
            }, status: :ok
    end

    # get all items for the filtered category
    def filtered_items
        category_name = Category.find(params[:id]).path
        filtered_items = Category.filter(category_name)
        render json: filtered_items, status: :ok
    end
end
