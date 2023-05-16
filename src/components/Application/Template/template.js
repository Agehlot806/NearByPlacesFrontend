import React, { useState, useEffect } from 'react';
import Navbar from '../../../directives/navbar'
import Sidebar from '../../../directives/sidebar'
import Footer from '../../../directives/footer'
import FroalaEditor from "froala-editor"


function Template() {
    const [content, setContent] = useState('<p>Initial content</p>');
    let editor;

    useEffect(() => {
        editor = new FroalaEditor('#editor', {
            placeholderText: 'Edit content here...',
            charCounterCount: false,
            events: {
                'contentChanged': function () {
                    setContent(editor.html.get());
                }
            }
        });

        //   return () => {
        //     editor.destroy();
        //   };
    }, []);
    return (
        <>
            <Navbar />
            <Sidebar />
            <div className='content-wrapper'>
                <div className="main-panel-content">
                    <div className='section-panel'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-12'>
                                    <div className="product-list-box">
                                        <div className="product-list-box-header">
                                            <h3><b>Email & SMS Templates</b></h3>
                                        </div>
                                        <div className="product-card-body">
                                            <div>
                                                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                                    <li className="nav-item">
                                                        <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#Email-Template" role="tab" aria-controls="pills-home" aria-selected="true">Email Template</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#SMS-Template" role="tab" aria-controls="pills-profile" aria-selected="false">SMS Template</a>
                                                    </li>
                                                </ul>
                                                <div className="tab-content" id="pills-tabContent">
                                                    <div className="tab-pane fade show active" id="Email-Template" role="tabpanel" aria-labelledby="pills-home-tab">
                                                        <div className='template-area'>
                                                            <h3><b><u>Create New Email Template</u></b></h3>
                                                            <div className='row'>
                                                                <div className='col-sm-6'>
                                                                    <form>
                                                                        <div className="form-group">
                                                                            <label>Name</label>
                                                                            <input type="text" className="form-control" placeholder="Enter..." />
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                                <div className='col-sm-12'>
                                                                    <div className="mt-3">
                                                                        <label>Template Preview Image <small>(Optional)</small> </label>
                                                                        <div className="mt-2">
                                                                            <div className="dropify-wrapper" style={{ height: '314px' }}>
                                                                                <div className="dropify-message"><span className="file-icon">
                                                                                    <p>Drag and drop a file here or click</p>
                                                                                </span>
                                                                                </div>
                                                                                <div className="dropify-loader" />
                                                                                <div className="dropify-errors-container">
                                                                                    <ul />
                                                                                </div>
                                                                                <input name="preview" type="file" className="dropify" data-height={300} data-allowed-file-extensions="jpg png jpeg" />

                                                                            </div>
                                                                        </div>
                                                                        <br />
                                                                        <div className='user-head'>
                                                                            <a href='#'><i className="fa fa-check-square-o" /> Create</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane fade" id="SMS-Template" role="tabpanel" aria-labelledby="pills-profile-tab">
                                                        <div className='template-area'>
                                                            <h3><b><u>Create SMS Body Template</u></b></h3>
                                                            <div className='row'>
                                                                <div className='col-sm-6'>
                                                                    <form>
                                                                        <div className="form-group">
                                                                            <label>SMS Name</label>
                                                                            <input type="text" className="form-control" placeholder="Enter..." />
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                                <div className='col-sm-12'>
                                                                    <div className="mt-3">
                                                                        <label>SMS Body</label>
                                                                        <textarea id="editor" defaultValue={content}></textarea>
                                                                        <br />
                                                                        <div className='user-head'>
                                                                            <a href='#'><i className="fa fa-check-square-o" /> Create</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Template