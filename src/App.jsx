import React, {Component} from "react";
import {Redirect, Route, Switch} from "react-router-dom";

import NavItem from "./NavItem";

import DynamicComponentsExample from "./dynamicComponentExample/DynamicComponentsExample";
import RichGridExample from "./richGridExample/RichGridExample";
import RichComponentsExample from "./richComponentExample/RichComponentsExample";
import EditorComponentsExample from "./editorComponentExample/EditorComponentsExample";
import PinnedRowComponentExample from "./pinnedRowExample/PinnedRowComponentExample";
import FullWidthComponentExample from "./fullWidthExample/FullWidthComponentExample";
import GroupedRowInnerRendererComponentExample from "./groupedRowInnerRendererExample/GroupedRowInnerRendererComponentExample";
import FilterComponentExample from "./filterComponentExample/FilterComponentExample";
import MasterDetailExample from "./masterDetailExample/MasterDetailExample";
import SimpleReduxExample from "./simpleReduxExample/SimpleReduxExample";
import FloatingFilterGridExample from "./floatingFilter/FloatingFilterGridExample";
import SimpleReduxDynamicExample from "./simpleReduxDynamicComponentExample/SimpleReduxExample";

const SideBar = () => (
        <div style={{float: "left", width: 335, marginRight: 25}}>
            <ul className="nav nav-pills nav-stacked">
                <NavItem to='/rich-grid'>Rich Grid Example</NavItem>
                <NavItem to='/dynamic'>Dynamic React Component Example</NavItem>
                <NavItem to='/rich-dynamic'>Dynamic React Components - Richer Example</NavItem>
                <NavItem to='/editor'>Cell Editor Component Example</NavItem>
                <NavItem to='/floating-row'>Floating Row Renderer Example</NavItem>
                <NavItem to='/full-width'>Full Width Renderer Example</NavItem>
                <NavItem to='/group-row'>Grouped Row Inner Renderer Example</NavItem>
                <NavItem to='/filter'>Filters Component Example</NavItem>
                <NavItem to='/master-detail'>Master Detail Example</NavItem>
                <NavItem to='/floating-filter'>Floating Filters</NavItem>
                <NavItem to='/simple-redux'>Simple Redux Example</NavItem>
                <NavItem to='/simple-redux-dynamic'>Simple Redux Dynamic Component Example</NavItem>
            </ul>
        </div>
);

class App extends Component {
    render() {
        return (
            <div style={{display: "inline-block", width: "100%"}}>
                <SideBar/>
                <div style={{float: "left"}}>
                    <Switch>
                        <Redirect from="/" exact to="/rich-grid"/>
                        <Route exact path='/rich-grid' component={RichGridExample}/>
                        <Route exact path='/dynamic' component={DynamicComponentsExample}/>
                        <Route exact path='/rich-dynamic' component={RichComponentsExample}/>
                        <Route exact path='/editor' component={EditorComponentsExample}/>
                        <Route exact path='/floating-row' component={PinnedRowComponentExample}/>
                        <Route exact path='/full-width' component={FullWidthComponentExample}/>
                        <Route exact path='/group-row' component={GroupedRowInnerRendererComponentExample}/>
                        <Route exact path='/filter' component={FilterComponentExample}/>
                        <Route exact path='/master-detail' component={MasterDetailExample}/>
                        <Route exact path='/floating-filter' component={FloatingFilterGridExample}/>
                        <Route exact path='/simple-redux' component={SimpleReduxExample}/>
                        <Route exact path='/simple-redux-dynamic' component={SimpleReduxDynamicExample}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

export default App

/*
class App extends Component {
    constructor(props) {
        super(props);

        let searchParams = new URLSearchParams(window.location.search);
        let fromDocs = searchParams.has("fromDocs");
        let example = searchParams.has("example") ? searchParams.get("example") : 'rich-grid';

        this.state = {
            example,
            fromDocs
        };

        this.setExample = this.setExample.bind(this);
    }

    setExample(example) {
        this.setState({
            example
        })
    }

    render() {
        let header = null;
        if (!this.state.fromDocs) {
            header = (
                <ul className="nav nav-pills">
                    <li role="presentation" className={this.state.example === 'rich-grid' ? 'active' : null} onClick={() => this.setExample("rich-grid")}><a href="#">Rich Grid Example</a></li>
                    <li role="presentation" className={this.state.example === 'dynamic' ? 'active' : null} onClick={() => this.setExample("dynamic")}><a href="#">Dynamic React Component Example</a></li>
                    <li role="presentation" className={this.state.example === 'rich-dynamic' ? 'active' : null} onClick={() => this.setExample("rich-dynamic")}><a href="#">Dynamic React Components - Richer Example</a></li>
                    <li role="presentation" className={this.state.example === 'editor' ? 'active' : null} onClick={() => this.setExample("editor")}><a href="#">Cell Editor Component Example</a></li>
                    <li role="presentation" className={this.state.example === 'pinned-row' ? 'active' : null} onClick={() => this.setExample("pinned-row")}><a href="#">Pinned Row Renderer Example</a></li>
                    <li role="presentation" className={this.state.example === 'full-width' ? 'active' : null} onClick={() => this.setExample("full-width")}><a href="#">Full Width Renderer Example</a></li>
                    <li role="presentation" className={this.state.example === 'group-row' ? 'active' : null} onClick={() => this.setExample("group-row")}><a href="#">Grouped Row Inner Renderer Example</a></li>
                    <li role="presentation" className={this.state.example === 'filter' ? 'active' : null} onClick={() => this.setExample("filter")}><a href="#">Filters Component Example</a></li>
                    <li role="presentation" className={this.state.example === 'floating-filter' ? 'active' : null} onClick={() => this.setExample("floating-filter")}><a href="#">Floating Filters</a></li>
                    <li role="presentation" className={this.state.example === 'master-detail' ? 'active' : null} onClick={() => this.setExample("master-detail")}><a href="#">Master Detail Example</a></li>
                    <li role="presentation" className={this.state.example === 'simple-redux' ? 'active' : null} onClick={() => this.setExample("simple-redux")}><a href="#">Simple Redux Example</a></li>
                    <li role="presentation" className={this.state.example === 'simple-redux-dynamic' ? 'active' : null} onClick={() => this.setExample("simple-redux-dynamic")}><a href="#">Simple Redux Dynamic Component Example</a></li>
                </ul>)
        }

        let example = null;
        switch (this.state.example) {
            case 'dynamic':
                example = <DynamicComponentsExample/>;
                break;
            case 'rich-dynamic':
                example = <RichComponentsExample/>;
                break;
            case 'editor':
                example = <EditorComponentsExample/>;
                break;
            case 'pinned-row':
                example = <PinnedRowComponentExample/>;
                break;
            case 'full-width':
                example = <FullWidthComponentExample/>;
                break;
            case 'group-row':
                example = <GroupedRowInnerRendererComponentExample/>;
                break;
            case 'filter':
                example = <FilterComponentExample/>;
                break;
            case 'master-detail':
                example = <MasterDetailExample/>;
                break;
            case 'simple-redux':
                example = <SimpleReduxExample/>;
                break;
            case 'floating-filter':
                example = <FloatingFilterGridExample/>;
                break;
            case 'simple-redux-dynamic':
                example = <SimpleReduxDynamicExample/>;
                break;
            default:
                example = <RichGridExample/>;
        }

        return (
            <div>
                {header}
                {example}
            </div>
        )
    }
}

export default App
*/
