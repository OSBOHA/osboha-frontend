<template>
    <iq-card>
        <template v-slot:headerTitle>
            <h1 class="card-title">خطواتك نحو التوثيق</h1>
            <h4 class="card-title" v-if="userBook">
                كتاب {{ userBook?.book?.name }}
                <span class="material-symbols-outlined">
                    draw
                </span>
            </h4>
        </template>
        <template v-slot:body>
            <div class="alert alert-primary">
                <h4>
                    <strong> انتبه لضمان قبول انجازك تأكد مما يلي </strong>
                </h4>
                <ul>
                    <li>
                        يجب ان تكون اطروحاتك مرتبة بشكل تسلسلي متناسق مع عدد صفحات
                        الكتاب
                    </li>

                    <li>تجنب وضع الرموز التعبيرية ( الإيموجي ) ضمن اطروحاتك</li>

                    <li>
                        يجب أن لا تقل عدد الصفحات التي تمثلها الأطروحة عن ٦ صفحات على
                        الأقل
                    </li>
                </ul>
            </div>
            <div class="p-0 text-center">
                <video class="w-75" controls preload="metadata">
                    <source src="@/assets/videos/eligible_videos/main.mp4#t=5.0" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
            <TimeLine :items="timelineItems" />
        </template>
    </iq-card>
</template>
<script>

export default {
    name: "Eligible Steps",
    props: {
        user_book: {
            type: [Object],
            required: true,
        },
    },
    data() {
        return {
            timelineItems: [
                {
                    color: "primary",
                    title: "الأطروحات",
                    description:
                        `
   تعتبر كتابة الأطروحة من المراحل السامية في القراءة النافعة، حيث هي عملية عقلية وحركية،
    تبدأ بتلقيك فكريًا لأفكار الكاتب ومعلومات الكتاب، ثم إعادة فرزها وتحليلها وإخضاعها لتجاربك وأفكارك الذاتية
   ومعلوماتك وخبراتك. فينتج عنها حركيًا كتابة لمزيج من الأفكار و الآراء في محاورتك لما طرحه الكاتب وتنتج في سطور كتابتك. <strong style="color:#278036">نطلب منك هنا كحد أدنى ( 8 ) أطروحات شاملة في قراءتك لهذا الكتاب و (12) أطروحة كحد أعلى </strong> ،
   ويجب عليك أن تكتب أطروحتك بعناية فنحن <strong style="color:#831018"> نرفض توثيق الأطروحات التي تعتمد على نسخ اقتباسات حرفية أو تلك التي تبنى على فكرة تلخيص الأفكار فحسب  </strong> . كن منتجًا في أطروحتك وليس مستهلكًا.
   `,
                    child: {
                        type: "btn",
                        route: {
                            name: "achievement.theses",
                            param: this.$route.params.id,
                        },
                        items: [],
                    },
                },
                {
                    color: "primary",
                    title: "التلخيص العام",
                    description:
                        `
            <h4 class="mb-2">كيف اكتب الملخص العام، وكيف أحدد السؤال العام </h4>
            لكل مادة مقروءة (كتاب) هناك سؤال عام يسعى الكتاب لنقاشه، ومنه يتفرع
                                              الكتاب على شكل
                                              فصول أساسية ومن
                                              ثم مباحث داخل كل فصل. عند شروعك في قراءة الكتاب، عليك المرور على مقدمة
                                              المؤلف ومحاولة
                                              معرفة (السؤال
                                              العام) الذي يسعى الكتاب للإجابة عنه.
                                              <br />
                                              أمثلة 👇🏻
                                              <br />
                                              <strong style="color:#278036"> كتاب أغنى رجل في بابل</strong>  = يدور السؤال العام حول كيفية صناعة الثروة المالية
                                              للفرد
                                              <br />
                                              <strong style="color:#278036"> كتاب سيكولوجية الجماهير </strong>  = يدور السؤال العام في الكتاب حول قدرة المسؤول على
                                              التحكم في
                                              الجماهير والشعوب
                                              من الناحية السكولوجية
                                              <br />

                                             <strong style="color:#831018"> ومن جانب آخر  </strong>، لكل مادة مقروءة (كتاب) هناك تلخيص عام للأفكار العامة والمحاور
                                              الأساسية
                                              التي يدور حولها
                                              الكتاب. فيجب على القارئ أن يستطيع دائمًا تقديم ملخص من الكتاب، ويستحسن
                                              استخدام أفكار
                                              الكاتب والفاظه
                                              باقتضاب لصناعة الملخص، لا تقم بإضافة أفكارك واعتقاداتك على الملخص، ستفعل ذلك
                                              حين تكتب
                                              الأطروحة حين تمزج
                                              ملخص الكاتب مع أفكارك وإسقاطاتك الفكرية ومخزونك المعرفي ومقارنته مع الكتاب.`,
                    child: {
                        type: "btn",
                        route: {
                            name: "achievement.general_summary",
                            param: this.$route.params.id,
                        },
                        items: [],
                    },
                },
                {
                    color: "primary",
                    title: "الأسئلة",
                    description: `القراءة السليمة، هي تلك التي نبدأها بحثًا عن بعض الإجابات وتنقيبًا عن معلومات وأفكار، ونخرج منها بأسئلة أخرى وأجوبة وأفكار. <strong style="color:#278036"> نطلب منك في هذه الخانة تزويدنا بالسؤال </strong> الذي تجيب عنه الصفحات التي تحددها وسنقوم نحن بتفقد هذه الصفحات بحثًا عن مدى دقة إجابة هذه الصفحات لهذا التساؤل. أنت هنا تتدرب على احتراف القراءة السليمة.تذكر أن عليك تحديد خمس أسئلة كحد أدنى من هذا الكتاب وتزويدنا بالإجابة`,
                    child: {
                        type: "btn",
                        text: "",
                        route: {
                            name: "achievement.questions",
                            param: this.$route.params.id,
                        },
                        items: [],
                    },
                },
            ],
        };
    },

};
</script>