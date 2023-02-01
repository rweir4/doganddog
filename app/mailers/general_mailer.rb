class GeneralMailer < ApplicationMailer
  default from: 'notifications@example.com'

  def customer_inquiry
    @name = params[:name]
    @email = params[:email]
    @message = params[:message]

    mail(to: 'hello.ginnyandco@gmail.com', subject: 'Customer Inquiry')
  end
end