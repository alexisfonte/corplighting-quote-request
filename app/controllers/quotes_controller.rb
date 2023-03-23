class QuotesController < ApplicationController
    
    def index 
        render json: Quote.all, status: :ok
    end 

    def show
        quote = Quote.find(params[:id])
        render json: quote, status: :ok
    end

    def create
        quote = Quote.create!(user_id: 1, status: "draft")
        render json: quote, status: :created
    end

    def update
        quote = Quote.find(params[:id])
        new_quote = quote.update!(quote_params)
        render json: new_quote, status: :accepted
    end

    private

    def quote_params
        params.permit(:prep_date, :return_date, :status, :client_id, :venue_id)
    end
end
