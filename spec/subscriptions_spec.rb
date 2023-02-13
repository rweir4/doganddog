require 'rails_helper'

RSpec.describe Api::V1::SubscriptionsController, type: :controller do
  describe 'CREATE subscription' do
  
    context 'email is valid' do
      it 'creates a subscription' do
        email = 'hello@example.com'

        subscription = Subscription.new({ email: email })
        expect(subscription).to be_valid

        subscription.save!
        expect(Subscription.last.email).to eq(email)
      end
    end

    context 'email is not valid' do
      it 'creates a subscription' do
        email = 'hello@example'

        subscription = Subscription.new({ email: email })

        expect(subscription).to_not be_valid
      end
    end
  end
end