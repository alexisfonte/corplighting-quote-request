class CategoriesController < ApplicationController

    def index
        categories = Category.customer_categories
        render json: categories, status: :ok
    end

    def show 
        category = Category.find(params[:id])
        if category.customer_view == true
            # render json: category, status: :ok, serializer: SubcategorySerializer  
            render json: category, status: :ok
        else
            head :not_found
        end
    end

end
