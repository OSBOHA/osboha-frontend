<template>
    <div class="ramadan-view">
        <ramadanHeader />

        <div class="col-sm-12 mt-3">
            <iq-card class="iq-card ramadan-card">
                <div class="iq-card-header-toolbar d-flex text-center align-items-center mx-auto ramadan-card">
                    <h1 class="text-center mt-3 mb-3">اسئلة رمضان</h1>
                </div>
                <h2 class="text-center mt-1 mb-3" v-if="current_day">الحالي : {{ current_day.day }} ~ رمضان </h2>
                <div class="col-12 pt-2 text-center">
                    <div class="row">
                        <div class="col-6 col-md-6 col-lg-6" v-for="day in 30" :key="day">
                            <router-link v-if="foundDays(day) !== 0"
                                :to="{ name: 'ramadan.fill-questions', params: { day: foundDays(day) } }"
                                :class="` ${!foundDays(day) ? 'disabled-link' : ''}`">
                                <img :src="imagePath(day)" alt="question" class="img-fluid" />
                                <h4 class="text-center">{{ day }}</h4>
                            </router-link>
                            <span v-else class="disabled-link">
                                <img :src="imagePath(day)" alt="question" class="img-fluid" />
                                <h4 class="text-center">{{ day }}</h4>
                            </span>
                        </div>
                    </div>
                </div>

                <div class="d-inline-block w-100 text-center col-12">
                    <router-link :to="{ name: 'ramadan.index' }" class="d-block mt-3 mb-3 w-75 mx-auto">
                        <span class="back-btn display-6">عودة</span>
                        <span class="align-middle material-symbols-outlined diplay-6">
                            keyboard_return
                        </span>
                    </router-link>
                </div>

            </iq-card>
        </div>

    </div>
</template>

<script>
import ramadanHeader from "@/components/ramadan/ramadan-header";
import ramadanDaysService from "@/API/RamadanServices/ramadanDays.service";

export default {
    name: "Questions",
    components: {
        ramadanHeader,
    },
    async created() {
        this.days = await ramadanDaysService.all();
        this.current_day = await ramadanDaysService.current();
    },
    data() {
        return {
            loader: false,
            current_day: null,
            days: []
        };
    },
    computed: {
        foundDays() {
            const mappedDays = this.days.reduce((acc, item) => {
                acc[item.day] = item.id;
                return acc;
            }, {});

            return (day) => mappedDays[day] || 0;
        }
    },
    methods: {
        inDays(value) {
            return Object.values(this.days).some(item => item.day === value)
        },
        imagePath(day) {
            const imageName = this.inDays(day) ? 'question_on.png' : 'question_off.png';
            return require(`@/assets/images/ramadan/${imageName}`);
        }


    },
};
</script>

<style scoped>
@font-face {
    font-family: HacenSamra;
    src: url('@/assets/fonts/HacenSamra.ttf');
}

.ramadan-view h1,
h2,
h3,
h4,
h5,
h6,
p {
    font-family: HacenSamra, Arial, sans-serif;
    color: #203C42;
}

.ramada-p {
    font-family: HacenSamra, Arial, sans-serif;
    color: #203C42;
}

.ramadan-card {
    background: #f8f9fa;
}

.disabled-link {
    color: #ccc;
    /* Set the color to a muted or grayed-out color */
    pointer-events: none;
    /* Disable pointer events to prevent clicking */
    text-decoration: none;
    /* Remove underline or other decorations */
}

.statistics-card {
    background: #e6f9ea;
    border-top: none;
    border-right: solid #203C42;
    border-bottom: solid #203C42;
    border-left: solid #203C42;
}

.ramadan-btn {
    background: #b1d8c3;
    color: #203C42;

}


.back-btn {
    font-family: HacenSamra, Arial, sans-serif;
    color: #203C42;
}

.accepted {
    color: #3e9069;
}

.rejected {
    color: darkred;
}


/*form styles*/
#msform {
    position: relative;
    margin-top: 20px;
}

#msform fieldset .form-card {
    background: white;
    border: 0 none;
    border-radius: 0px;
    box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.2);
    padding: 20px 40px 30px 40px;
    box-sizing: border-box;
    width: 94%;
    margin: 0 3% 20px 3%;

    /*stacking fieldsets above each other*/
    position: relative;
}

#msform fieldset {
    background: white;
    border: 0 none;
    border-radius: 0.5rem;
    box-sizing: border-box;
    width: 100%;
    margin: 0;
    padding-bottom: 20px;

    /*stacking fieldsets above each other*/
    position: relative;
}

/*Hide all except first fieldset*/
#msform fieldset:not(:first-of-type) {
    display: none;
}

#msform fieldset .form-card {
    text-align: left;
    color: #9E9E9E;
}

#msform input,
#msform textarea {
    padding: 0px 8px 4px 8px;
    border: none;
    border-bottom: 1px solid #ccc;
    border-radius: 0px;
    margin-bottom: 25px;
    margin-top: 2px;
    width: 100%;
    box-sizing: border-box;
    font-family: montserrat;
    color: #2C3E50;
    font-size: 16px;
    letter-spacing: 1px;
}

#msform input:focus,
#msform textarea:focus {
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    border: none;
    font-weight: bold;
    border-bottom: 2px solid #596D13;
    outline-width: 0;
}


/*Dropdown List Exp Date*/
select.list-dt {
    border: none;
    outline: 0;
    border-bottom: 1px solid #ccc;
    padding: 2px 5px 3px 5px;
    margin: 2px;
}

select.list-dt:focus {
    border-bottom: 2px solid #596D13;
}

/*The background card*/
.card {
    z-index: 0;
    border: none;
    border-radius: 0.5rem;
    position: relative;
}

/*FieldSet headings*/
.fs-title {
    font-size: 25px;
    color: #2C3E50;
    margin-bottom: 10px;
    font-weight: bold;
    text-align: left;
}

/*progressbar*/
#progressbar {
    margin-bottom: 30px;
    overflow: hidden;
    color: lightgrey;
}

#progressbar .active {
    color: #203C42;
}

#progressbar li {
    list-style-type: none;
    font-size: 12px;
    width: 33%;
    float: left;
    position: relative;
}

/*ProgressBar before any progress*/
#progressbar li:before {
    width: 50px;
    height: 50px;
    line-height: 45px;
    display: block;
    font-size: 18px;
    color: #ffffff;
    background: lightgray;
    border-radius: 50%;
    margin: 0 auto 10px auto;
    padding: 2px;
}

/*ProgressBar connectors*/
#progressbar li:after {
    content: '';
    width: 100%;
    height: 2px;
    background: lightgray;
    position: absolute;
    left: 0;
    top: 25px;
    z-index: -1;
}

/*Color number of the step and the connector before it*/
#progressbar li.active:before,
#progressbar li.active:after {
    background: #596D13;
}

/*Imaged Radio Buttons*/
.radio-group {
    position: relative;
    margin-bottom: 25px;
}

.radio {
    display: inline-block;
    width: 204;
    height: 104;
    border-radius: 0;
    background: lightblue;
    box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    cursor: pointer;
    margin: 8px 2px;
}

.previous {
    background: #448e9e;
    color: white;
}

.radio:hover {
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.3);
}

.radio.selected {
    box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.1);
}

/*Fit image in bootstrap div*/
.fit-image {
    width: 100%;
    object-fit: cover;
}

/* Define your transitions and other styles here */
.step-enter-active,
.step-leave-active {
    transition: opacity 0.5s;
}

.step-enter-from,
.step-leave-to {
    opacity: 0;
}

.tag-input-container .form-control {
    min-height: 45px;
    cursor: text;
}

.tag-input-container input {
    border: none;
    outline: none;
    flex-grow: 1;
    padding: 0;
}
</style>