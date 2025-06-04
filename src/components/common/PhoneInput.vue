<template>
    <div class="input-group" dir="ltr">
        <div class="country-select-wrapper form-group mt-2">
            <select v-model="selectedCountryCode" id="country-code" @change="updatePhone"
                class="form-control mb-0 country-select form-select">
                <option v-for="country in COUNTRIES" :key="country.code" :value="country.code">
                    {{ country.name }} ({{ country.code }})
                </option>
            </select>
            <img :src="flagUrl" class="flag-icon" width="24" height="18" alt="Country Flag" />
        </div>
        <input v-model="phoneNumber" id="phone-number" type="text" placeholder="ادخل رقم الهاتف بدون صفر"
            class="form-control mt-2 ms-2" @input="validatePhone">
    </div>
</template>

<script>
import { COUNTRIES } from "@/utilities/constants";
import { convertToEnglish } from "@/utilities/commonFunctions";

export default {
    props: {
        modelValue: String,
    },
    data() {
        return {
            COUNTRIES,
            selectedCountryCode: "966",
            phoneNumber: "",
            show_number: false,
        };
    },
    computed: {
        fullPhoneNumber() {
            return this.convertToEnglish(`${this.selectedCountryCode}${this.phoneNumber}`);
        },
        flagUrl() {
            const country = Object.values(this.COUNTRIES).find(c => c.code === this.selectedCountryCode);
            return country ? `https://flagcdn.com/24x18/${country.flag.toLowerCase()}.png` : "";
        }
    },
    methods: {
        convertToEnglish,

        validatePhone() {
            this.phoneNumber = this.convertToEnglish(this.phoneNumber);

            if (this.phoneNumber.startsWith("0")) {
                this.phoneNumber = this.phoneNumber.replace(/^0+/, "");
            }

            this.updatePhone();
        },

        updatePhone() {
            this.show_number = true;
            this.$emit("update:modelValue", this.fullPhoneNumber);
        },
    },
};
</script>

<style>
.country-select-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    width: 30%;
    margin-bottom: unset
}

.flag-icon {
    position: absolute;
    left: 10px;
}

.country-select {
    padding-left: 40px;
    height: 100%;
}
</style>