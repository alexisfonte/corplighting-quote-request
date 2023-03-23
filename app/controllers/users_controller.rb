class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create]
    
    def show 
        user = current_user
        render json: user, status: :ok
    end 

    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end 

    def verify_edit
        if current_user&.authenticate(params[:password])
            head :ok
        else
            render json: {error: 'Incorrect Password'}, status: :unauthorized
        end
    end

    def update
        current_user.update!(edit_params)
        render json: current_user, status: :accepted
    end

    private

    def user_params
        params.permit(:email, :password, :name)
    end

    def edit_params
        params.permit(:name)
    end
end
