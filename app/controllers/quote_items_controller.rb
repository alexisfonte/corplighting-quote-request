class QuoteItemsController < ApplicationController

    def index
        render json: QuoteItem.all, status: :ok
    end

    def show
        quote_item = QuoteItem.find(params[:id])
        render json: quote_item, status: :ok
    end

    def create
        quote_item = QuoteItem.create!(quote_item_params)
        render json: quote_item, status: :ok
    end

    def update
        quote_item = QuoteItem.find(params[:id])
        new_quote_item = quote_item.update!(params[:quantity])
        render json: new_quote_item, status: :ok
    end

    def destroy
        quote_item = QuoteItem.find(params[:id])
        quote_item.destroy
        head :no_content
    end

    private

    def quote_item_params
        params.permit(:quote_id, :item_id, :quantity)
    end
    
end
