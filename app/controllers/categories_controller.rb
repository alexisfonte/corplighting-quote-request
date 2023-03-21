class CategoriesController < ApplicationController

    def index
        categories = Category.where(parent_category: nil)
        render json: categories, status: :ok
    end

    def show 
        category = Category.find(params[:id])
        render json: category, status: :ok, serializer: SubcategorySerializer
    end

end
