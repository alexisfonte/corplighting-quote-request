class CategoriesController < ApplicationController

    def index
        categories = Category.customer_categories
        render json: categories, status: :ok
    end

    def show 
        category = Category.find(params[:id])
        render json: category, status: :ok, serializer: SubcategorySerializer
    end

end
