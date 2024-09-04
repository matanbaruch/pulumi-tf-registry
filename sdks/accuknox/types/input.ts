// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";

export interface KubearmorHostSecurityPolicyCapability {
    action?: pulumi.Input<string>;
    matchCapabilities?: pulumi.Input<pulumi.Input<inputs.KubearmorHostSecurityPolicyCapabilityMatchCapability>[]>;
    message?: pulumi.Input<string>;
    severity?: pulumi.Input<number>;
    tags?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface KubearmorHostSecurityPolicyCapabilityMatchCapability {
    action?: pulumi.Input<string>;
    capabilities: pulumi.Input<string>;
    fromSources?: pulumi.Input<pulumi.Input<inputs.KubearmorHostSecurityPolicyCapabilityMatchCapabilityFromSource>[]>;
    message?: pulumi.Input<string>;
    severity?: pulumi.Input<number>;
    tags?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface KubearmorHostSecurityPolicyCapabilityMatchCapabilityFromSource {
    path: pulumi.Input<string>;
}

export interface KubearmorHostSecurityPolicyFile {
    action?: pulumi.Input<string>;
    matchDirectories?: pulumi.Input<pulumi.Input<inputs.KubearmorHostSecurityPolicyFileMatchDirectory>[]>;
    matchPaths?: pulumi.Input<pulumi.Input<inputs.KubearmorHostSecurityPolicyFileMatchPath>[]>;
    matchPatterns?: pulumi.Input<pulumi.Input<inputs.KubearmorHostSecurityPolicyFileMatchPattern>[]>;
    message?: pulumi.Input<string>;
    severity?: pulumi.Input<number>;
    tags?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface KubearmorHostSecurityPolicyFileMatchDirectory {
    action?: pulumi.Input<string>;
    dir: pulumi.Input<string>;
    fromSources?: pulumi.Input<pulumi.Input<inputs.KubearmorHostSecurityPolicyFileMatchDirectoryFromSource>[]>;
    message?: pulumi.Input<string>;
    ownerOnly?: pulumi.Input<boolean>;
    readOnly?: pulumi.Input<boolean>;
    recursive?: pulumi.Input<boolean>;
    severity?: pulumi.Input<number>;
    tags?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface KubearmorHostSecurityPolicyFileMatchDirectoryFromSource {
    path: pulumi.Input<string>;
}

export interface KubearmorHostSecurityPolicyFileMatchPath {
    action?: pulumi.Input<string>;
    fromSources?: pulumi.Input<pulumi.Input<inputs.KubearmorHostSecurityPolicyFileMatchPathFromSource>[]>;
    message?: pulumi.Input<string>;
    ownerOnly?: pulumi.Input<boolean>;
    path: pulumi.Input<string>;
    readOnly?: pulumi.Input<boolean>;
    severity?: pulumi.Input<number>;
    tags?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface KubearmorHostSecurityPolicyFileMatchPathFromSource {
    path: pulumi.Input<string>;
}

export interface KubearmorHostSecurityPolicyFileMatchPattern {
    action?: pulumi.Input<string>;
    message?: pulumi.Input<string>;
    ownerOnly?: pulumi.Input<boolean>;
    pattern: pulumi.Input<string>;
    readOnly?: pulumi.Input<boolean>;
    severity?: pulumi.Input<number>;
    tags?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface KubearmorHostSecurityPolicyNetwork {
    action?: pulumi.Input<string>;
    matchProtocols?: pulumi.Input<pulumi.Input<inputs.KubearmorHostSecurityPolicyNetworkMatchProtocol>[]>;
    message?: pulumi.Input<string>;
    severity?: pulumi.Input<number>;
    tags?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface KubearmorHostSecurityPolicyNetworkMatchProtocol {
    action?: pulumi.Input<string>;
    fromSources?: pulumi.Input<pulumi.Input<inputs.KubearmorHostSecurityPolicyNetworkMatchProtocolFromSource>[]>;
    message?: pulumi.Input<string>;
    protocol: pulumi.Input<string>;
    severity?: pulumi.Input<number>;
    tags?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface KubearmorHostSecurityPolicyNetworkMatchProtocolFromSource {
    path: pulumi.Input<string>;
}

export interface KubearmorHostSecurityPolicyNodeSelector {
    matchLabels: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

export interface KubearmorHostSecurityPolicyProcess {
    action?: pulumi.Input<string>;
    matchDirectories?: pulumi.Input<pulumi.Input<inputs.KubearmorHostSecurityPolicyProcessMatchDirectory>[]>;
    matchPaths?: pulumi.Input<pulumi.Input<inputs.KubearmorHostSecurityPolicyProcessMatchPath>[]>;
    matchPatterns?: pulumi.Input<pulumi.Input<inputs.KubearmorHostSecurityPolicyProcessMatchPattern>[]>;
    message?: pulumi.Input<string>;
    severity?: pulumi.Input<number>;
    tags?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface KubearmorHostSecurityPolicyProcessMatchDirectory {
    action?: pulumi.Input<string>;
    dir: pulumi.Input<string>;
    fromSources?: pulumi.Input<pulumi.Input<inputs.KubearmorHostSecurityPolicyProcessMatchDirectoryFromSource>[]>;
    message?: pulumi.Input<string>;
    ownerOnly?: pulumi.Input<boolean>;
    recursive?: pulumi.Input<boolean>;
    severity?: pulumi.Input<number>;
    tags?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface KubearmorHostSecurityPolicyProcessMatchDirectoryFromSource {
    path: pulumi.Input<string>;
}

export interface KubearmorHostSecurityPolicyProcessMatchPath {
    action?: pulumi.Input<string>;
    fromSources?: pulumi.Input<pulumi.Input<inputs.KubearmorHostSecurityPolicyProcessMatchPathFromSource>[]>;
    message?: pulumi.Input<string>;
    ownerOnly?: pulumi.Input<boolean>;
    path: pulumi.Input<string>;
    severity?: pulumi.Input<number>;
    tags?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface KubearmorHostSecurityPolicyProcessMatchPathFromSource {
    path: pulumi.Input<string>;
}

export interface KubearmorHostSecurityPolicyProcessMatchPattern {
    action?: pulumi.Input<string>;
    message?: pulumi.Input<string>;
    ownerOnly?: pulumi.Input<boolean>;
    pattern: pulumi.Input<string>;
    severity?: pulumi.Input<number>;
    tags?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface KubearmorHostSecurityPolicySyscall {
    matchPaths?: pulumi.Input<pulumi.Input<inputs.KubearmorHostSecurityPolicySyscallMatchPath>[]>;
    matchSyscalls?: pulumi.Input<pulumi.Input<inputs.KubearmorHostSecurityPolicySyscallMatchSyscall>[]>;
    message?: pulumi.Input<string>;
    severity?: pulumi.Input<number>;
    tags?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface KubearmorHostSecurityPolicySyscallMatchPath {
    fromSources?: pulumi.Input<pulumi.Input<inputs.KubearmorHostSecurityPolicySyscallMatchPathFromSource>[]>;
    path: pulumi.Input<string>;
    recursive?: pulumi.Input<string>;
    syscalls?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface KubearmorHostSecurityPolicySyscallMatchPathFromSource {
    dir?: pulumi.Input<string>;
    path?: pulumi.Input<string>;
    recursive?: pulumi.Input<string>;
}

export interface KubearmorHostSecurityPolicySyscallMatchSyscall {
    fromSources?: pulumi.Input<pulumi.Input<inputs.KubearmorHostSecurityPolicySyscallMatchSyscallFromSource>[]>;
    syscalls?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface KubearmorHostSecurityPolicySyscallMatchSyscallFromSource {
    dir?: pulumi.Input<string>;
    path?: pulumi.Input<string>;
    recursive?: pulumi.Input<string>;
}

export interface KubearmorSecurityPolicyCapability {
    action?: pulumi.Input<string>;
    matchCapabilities?: pulumi.Input<pulumi.Input<inputs.KubearmorSecurityPolicyCapabilityMatchCapability>[]>;
    message?: pulumi.Input<string>;
    severity?: pulumi.Input<number>;
    tags?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface KubearmorSecurityPolicyCapabilityMatchCapability {
    action?: pulumi.Input<string>;
    capabilities: pulumi.Input<string>;
    fromSources?: pulumi.Input<pulumi.Input<inputs.KubearmorSecurityPolicyCapabilityMatchCapabilityFromSource>[]>;
    message?: pulumi.Input<string>;
    severity?: pulumi.Input<number>;
    tags?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface KubearmorSecurityPolicyCapabilityMatchCapabilityFromSource {
    path: pulumi.Input<string>;
}

export interface KubearmorSecurityPolicyFile {
    action?: pulumi.Input<string>;
    matchDirectories?: pulumi.Input<pulumi.Input<inputs.KubearmorSecurityPolicyFileMatchDirectory>[]>;
    matchPaths?: pulumi.Input<pulumi.Input<inputs.KubearmorSecurityPolicyFileMatchPath>[]>;
    matchPatterns?: pulumi.Input<pulumi.Input<inputs.KubearmorSecurityPolicyFileMatchPattern>[]>;
    message?: pulumi.Input<string>;
    severity?: pulumi.Input<number>;
    tags?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface KubearmorSecurityPolicyFileMatchDirectory {
    action?: pulumi.Input<string>;
    dir: pulumi.Input<string>;
    fromSources?: pulumi.Input<pulumi.Input<inputs.KubearmorSecurityPolicyFileMatchDirectoryFromSource>[]>;
    message?: pulumi.Input<string>;
    ownerOnly?: pulumi.Input<boolean>;
    readOnly?: pulumi.Input<boolean>;
    recursive?: pulumi.Input<boolean>;
    severity?: pulumi.Input<number>;
    tags?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface KubearmorSecurityPolicyFileMatchDirectoryFromSource {
    path: pulumi.Input<string>;
}

export interface KubearmorSecurityPolicyFileMatchPath {
    action?: pulumi.Input<string>;
    fromSources?: pulumi.Input<pulumi.Input<inputs.KubearmorSecurityPolicyFileMatchPathFromSource>[]>;
    message?: pulumi.Input<string>;
    ownerOnly?: pulumi.Input<boolean>;
    path: pulumi.Input<string>;
    readOnly?: pulumi.Input<boolean>;
    severity?: pulumi.Input<number>;
    tags?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface KubearmorSecurityPolicyFileMatchPathFromSource {
    path: pulumi.Input<string>;
}

export interface KubearmorSecurityPolicyFileMatchPattern {
    action?: pulumi.Input<string>;
    message?: pulumi.Input<string>;
    ownerOnly?: pulumi.Input<boolean>;
    pattern: pulumi.Input<string>;
    readOnly?: pulumi.Input<boolean>;
    severity?: pulumi.Input<number>;
    tags?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface KubearmorSecurityPolicyNetwork {
    action?: pulumi.Input<string>;
    matchProtocols?: pulumi.Input<pulumi.Input<inputs.KubearmorSecurityPolicyNetworkMatchProtocol>[]>;
    message?: pulumi.Input<string>;
    severity?: pulumi.Input<number>;
    tags?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface KubearmorSecurityPolicyNetworkMatchProtocol {
    action?: pulumi.Input<string>;
    fromSources?: pulumi.Input<pulumi.Input<inputs.KubearmorSecurityPolicyNetworkMatchProtocolFromSource>[]>;
    message?: pulumi.Input<string>;
    protocol: pulumi.Input<string>;
    severity?: pulumi.Input<number>;
    tags?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface KubearmorSecurityPolicyNetworkMatchProtocolFromSource {
    path: pulumi.Input<string>;
}

export interface KubearmorSecurityPolicyProcess {
    action?: pulumi.Input<string>;
    matchDirectories?: pulumi.Input<pulumi.Input<inputs.KubearmorSecurityPolicyProcessMatchDirectory>[]>;
    matchPaths?: pulumi.Input<pulumi.Input<inputs.KubearmorSecurityPolicyProcessMatchPath>[]>;
    matchPatterns?: pulumi.Input<pulumi.Input<inputs.KubearmorSecurityPolicyProcessMatchPattern>[]>;
    message?: pulumi.Input<string>;
    severity?: pulumi.Input<number>;
    tags?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface KubearmorSecurityPolicyProcessMatchDirectory {
    action?: pulumi.Input<string>;
    dir: pulumi.Input<string>;
    fromSources?: pulumi.Input<pulumi.Input<inputs.KubearmorSecurityPolicyProcessMatchDirectoryFromSource>[]>;
    message?: pulumi.Input<string>;
    ownerOnly?: pulumi.Input<boolean>;
    recursive?: pulumi.Input<boolean>;
    severity?: pulumi.Input<number>;
    tags?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface KubearmorSecurityPolicyProcessMatchDirectoryFromSource {
    path: pulumi.Input<string>;
}

export interface KubearmorSecurityPolicyProcessMatchPath {
    action?: pulumi.Input<string>;
    fromSources?: pulumi.Input<pulumi.Input<inputs.KubearmorSecurityPolicyProcessMatchPathFromSource>[]>;
    message?: pulumi.Input<string>;
    ownerOnly?: pulumi.Input<boolean>;
    path: pulumi.Input<string>;
    severity?: pulumi.Input<number>;
    tags?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface KubearmorSecurityPolicyProcessMatchPathFromSource {
    path: pulumi.Input<string>;
}

export interface KubearmorSecurityPolicyProcessMatchPattern {
    action?: pulumi.Input<string>;
    message?: pulumi.Input<string>;
    ownerOnly?: pulumi.Input<boolean>;
    pattern: pulumi.Input<string>;
    severity?: pulumi.Input<number>;
    tags?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface KubearmorSecurityPolicySelector {
    matchLabels: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

export interface KubearmorSecurityPolicySyscall {
    matchPaths?: pulumi.Input<pulumi.Input<inputs.KubearmorSecurityPolicySyscallMatchPath>[]>;
    matchSyscalls?: pulumi.Input<pulumi.Input<inputs.KubearmorSecurityPolicySyscallMatchSyscall>[]>;
    message?: pulumi.Input<string>;
    severity?: pulumi.Input<number>;
    tags?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface KubearmorSecurityPolicySyscallMatchPath {
    fromSources?: pulumi.Input<pulumi.Input<inputs.KubearmorSecurityPolicySyscallMatchPathFromSource>[]>;
    path: pulumi.Input<string>;
    recursive?: pulumi.Input<string>;
    syscalls?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface KubearmorSecurityPolicySyscallMatchPathFromSource {
    dir?: pulumi.Input<string>;
    path?: pulumi.Input<string>;
    recursive?: pulumi.Input<string>;
}

export interface KubearmorSecurityPolicySyscallMatchSyscall {
    fromSources?: pulumi.Input<pulumi.Input<inputs.KubearmorSecurityPolicySyscallMatchSyscallFromSource>[]>;
    syscalls?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface KubearmorSecurityPolicySyscallMatchSyscallFromSource {
    dir?: pulumi.Input<string>;
    path?: pulumi.Input<string>;
    recursive?: pulumi.Input<string>;
}
