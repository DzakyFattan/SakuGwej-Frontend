<script setup lang="ts">

export type ProfileData = {
  username?: string;
  birthDate?: string;
  email?: string;
  gender?: string;
  phoneNumber?: string;
};

export type NewProfileData = {
  newUsername?: string
  newBirthDate?: string
  newGender?: string
  newEmail?: string
  newPhoneNumber?: string
}

export type Account = {
  _id: string
  userId: string
  accountName: string
  accountNumber: string
  accountDescription: string
  nominal: number
}

export type AccountData = Account[]

export type Debt = {
  _id: string
  userId: string
  type: string
  amount: number
  name: string
  description: string
  startDate: Date
  dueDate: Date
}

export type DebtData = Debt[];

export type Transaction = {
  _id: string
  userId: string
  type: string
  amount: number
  category: string
  accountId: string
  description: string
}

export type TransactionData = {
  createdAt: Date,
  notes: Transaction[]
}[];


</script>
