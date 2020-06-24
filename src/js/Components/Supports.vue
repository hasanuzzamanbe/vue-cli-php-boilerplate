<template>
    <div>
        <el-row :gutter="20" class="users_details_row">
            <el-col :xs="24" :md="12" class="inner_column">
                <div>
                    <div class="users_details_row_header">
                        <h3>Feedback and Support</h3>
                    </div>
                    <div class="supports_block inner_box">
                        <p>We'd love your help, feedback and support.</p>
                        <ul class="support_items">
                            <li>
                                <a target="_blank" href="">Rate This plugin plugin,</a> and help spread the word!
                            </li>
                            <li>
                                Report bugs (with steps to reproduce) or <a target="_blank" href="https://github.com/hasanuzzamanbe/Author-Bio-by-Shortcode">submit pull requests on GitHub</a>
                            </li>
                            <li>
                                Have a question? or Need Expert Support? <a target="_blank" href="mailto:hasanuzzamanbe@gmail.com?subject=Author Bio Ultimate support and Feedback">Mail to developer</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script type="text/babel">
    export default {
        name: 'Supports'
    }
</script>

<style>
    .supports_block.inner_box {
        background: white;
        padding: 19px;
    }
</style>
