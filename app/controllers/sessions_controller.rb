class SessionsController < ApplicationController
    skip_before_action :authorize, only: [:create, :omniauth]

    def create
        user = User.find_by(email: params[:email])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :ok
        else 
            render json:{errors: "Invalid email or password"}, status: :unauthorized
        end
    end

    def destroy
        session.delete :user_id
        head :no_content
    end

    def omniauth
        user = User.find_or_create_by!(uid: request.env['omniauth.auth'][:uid], provider: request.env['omniauth.auth'][:provider]) do |u|
            u.email = request.env['omniauth.auth'][:info][:email]
            u.name = request.env['omniauth.auth'][:info][:name]
            u.password = SecureRandom.hex(15)
        end
        if user
            session[:user_id] = user.id
            render json: user, status: :ok
        end
    end
end