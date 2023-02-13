class CustomerInquiryMailer < ApplicationMailer
  default from: 'notifications@example.com'

  def has_required_params?
    params[:mailer][:name] && params[:mailer][:email] && params[:mailer][:message]
  end

  def customer_inquiry
    unless has_required_params? && valid_format?
      render json: {}, status: :unprocessable_entity
    end

    @name = params[:mailer][:name]
    @email = params[:mailer][:email]
    @message = params[:mailer][:message]

    mail(to: 'hello.ginnyandco@gmail.com', subject: 'Customer Inquiry')
  end

  private

  def valid_format?
    username, domain, extension = params[:mailer][:email].split(/[@, .]/)
    username.blank? && domain.blank? && extension.blank?
  end
end