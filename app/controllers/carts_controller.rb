class CartsController < ApplicationController
    before_action :set_cart
    
    def display_cart
        render json: { cart: CartSerializer.new(@cart) }
    end
    
    def add_to_cart
        item = Item.find(params[:id])
        quantity = params[:quantity].to_i
        @cart.add_item(item, quantity)
        if current_user
        @cart.user = current_user
        @cart.save
        else
        session[:cart] = @cart.serialize
        end
        render json: { notice: "#{item.name} added to cart", cart: CartSerializer.new(@cart) }
    end
    
    def remove_from_cart
        item = Item.find(params[:id])
        @cart.remove_item(item)
        if current_user
        @cart.user = current_user
        @cart.save
        else
        session[:cart] = @cart.serialize
        end
        render json: { notice: "#{item.name} removed from cart", cart: CartSerializer.new(@cart) }
    end
    
    def update_cart_item_quantity
        cart_item = @cart.cart_items.find_by(item_id: params[:id])
        cart_item.update(quantity: params[:quantity].to_i)
        render json: { notice: "#{cart_item.item.name} updated", cart: CartSerializer.new(@cart) }
    end
    
    private
    
    def set_cart
        if current_user && current_user.cart
        @cart = current_user.cart
        elsif session[:cart]
        @cart = Cart.build_from_hash(session[:cart])
        else
        @cart = Cart.new
        session[:cart] = @cart.serialize
        end
    end      
end
