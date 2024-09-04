// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";

export interface SmartRulesFirewallSmartRule {
    actions: outputs.SmartRulesFirewallSmartRuleAction[];
    matches: outputs.SmartRulesFirewallSmartRuleMatch[];
    metadatas?: outputs.SmartRulesFirewallSmartRuleMetadata[];
}

export interface SmartRulesFirewallSmartRuleAction {
    firewallAction: string;
}

export interface SmartRulesFirewallSmartRuleMatch {
    bots?: string;
    cookie?: string;
    cookieContent?: string;
    deviceTypes?: string[];
    header?: string;
    hostname?: string;
    httpReferer?: string;
    httpUserAgent?: string;
    httpVersions?: string[];
    originContinents?: string[];
    originCountry?: string;
    remoteAddress?: string;
    requestMethods?: string[];
    requestUri?: string;
    scheme?: string;
}

export interface SmartRulesFirewallSmartRuleMetadata {
    notes?: string;
    status?: string;
}

export interface SmartRulesRewriteSmartRule {
    actions: outputs.SmartRulesRewriteSmartRuleAction[];
    matches: outputs.SmartRulesRewriteSmartRuleMatch[];
    metadatas?: outputs.SmartRulesRewriteSmartRuleMetadata[];
}

export interface SmartRulesRewriteSmartRuleAction {
    redirectTo: string;
    redirectType: string;
}

export interface SmartRulesRewriteSmartRuleMatch {
    bots?: string;
    cookie?: string;
    cookieContent?: string;
    deviceTypes?: string[];
    header?: string;
    hostname?: string;
    httpReferer?: string;
    httpUserAgent?: string;
    httpVersions?: string[];
    originContinents?: string[];
    originCountry?: string;
    remoteAddress?: string;
    requestMethods?: string[];
    requestUri?: string;
    scheme?: string;
}

export interface SmartRulesRewriteSmartRuleMetadata {
    notes?: string;
    status?: string;
}

export interface SmartRulesSettingsSmartRule {
    actions: outputs.SmartRulesSettingsSmartRuleAction[];
    matches: outputs.SmartRulesSettingsSmartRuleMatch[];
    metadatas?: outputs.SmartRulesSettingsSmartRuleMetadata[];
}

export interface SmartRulesSettingsSmartRuleAction {
    backend?: string;
    cache301?: string;
    cache302?: string;
    cache404?: string;
    cacheMode?: string;
    cacheTtl?: string;
    cachingBehaviour?: string;
    cors?: string;
    customCacheKey?: string;
    encodingHeader?: string;
    expiresTtl?: string;
    gzipStatus?: string;
    hideHeader?: string;
    ignoreCacheControl?: string;
    ignoreExpires?: string;
    ignoreVary?: string;
    imageOptimize?: string;
    imageOptimizeLevel?: string;
    imageOptimizeMetadata?: string;
    imageOptimizeProgressive?: string;
    imageOptimizeWebp?: string;
    ratelimitStatus?: string;
    setHost?: string;
    setRequestHeaders?: {[key: string]: string};
    setResponseHeaders?: {[key: string]: string};
    setUri?: string;
    signedUrlKey?: string;
    signedUrlType?: string;
    sslMode?: string;
    wafLevel?: string;
    wafMode?: string;
    wafRuleAction?: string;
    wafStatus?: string;
}

export interface SmartRulesSettingsSmartRuleMatch {
    bots?: string;
    cookie?: string;
    cookieContent?: string;
    deviceTypes?: string[];
    header?: string;
    hostname?: string;
    httpReferer?: string;
    httpUserAgent?: string;
    httpVersions?: string[];
    originContinents?: string[];
    originCountry?: string;
    remoteAddress?: string;
    requestMethods?: string[];
    requestUri?: string;
    scheme?: string;
}

export interface SmartRulesSettingsSmartRuleMetadata {
    notes?: string;
    status?: string;
}

