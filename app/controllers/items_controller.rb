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
        inventory = Item.customer_inventory.paginate(page: params[:page], per_page: 20)
        render json: {
            inventory: inventory,
            page: inventory.current_page,
            pages: inventory.total_pages
            }, status: :ok
    end

    # get all items for the filtered category
    def filtered_items
        category_name = params[:path]
        filtered_items = Category.filter(category_name).paginate(page: params[:page], per_page: 20)
        render json: {
            inventory: filtered_items,
            page: filtered_items.current_page,
            pages: filtered_items.total_pages
            }, status: :ok
    end
end
