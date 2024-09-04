// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class AamAuthenticationLogonHttpAuthenticateInstance extends pulumi.CustomResource {
    /**
     * Get an existing AamAuthenticationLogonHttpAuthenticateInstance resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AamAuthenticationLogonHttpAuthenticateInstanceState, opts?: pulumi.CustomResourceOptions): AamAuthenticationLogonHttpAuthenticateInstance {
        return new AamAuthenticationLogonHttpAuthenticateInstance(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/aamAuthenticationLogonHttpAuthenticateInstance:AamAuthenticationLogonHttpAuthenticateInstance';

    /**
     * Returns true if the given object is an instance of AamAuthenticationLogonHttpAuthenticateInstance.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AamAuthenticationLogonHttpAuthenticateInstance {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AamAuthenticationLogonHttpAuthenticateInstance.__pulumiType;
    }

    /**
     * Lock the account when the failed logon attempts is exceeded
     */
    public readonly accountLock!: pulumi.Output<number | undefined>;
    public readonly authMethod!: pulumi.Output<outputs.AamAuthenticationLogonHttpAuthenticateInstanceAuthMethod | undefined>;
    /**
     * The time an account remains locked in seconds (default 1800)
     */
    public readonly duration!: pulumi.Output<number | undefined>;
    /**
     * Set HSTS policy expired timeout in seconds, 0 means to disable HSTS policy
     */
    public readonly hstsTimeout!: pulumi.Output<number | undefined>;
    /**
     * Specify HTTP-Authenticate logon name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Name of the packet capture template to be bind with this object
     */
    public readonly packetCaptureTemplate!: pulumi.Output<string | undefined>;
    /**
     * Maximum number of consecutive failed logon attempts (default 3)
     */
    public readonly retry!: pulumi.Output<number | undefined>;
    public readonly samplingEnables!: pulumi.Output<outputs.AamAuthenticationLogonHttpAuthenticateInstanceSamplingEnable[] | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a AamAuthenticationLogonHttpAuthenticateInstance resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: AamAuthenticationLogonHttpAuthenticateInstanceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AamAuthenticationLogonHttpAuthenticateInstanceArgs | AamAuthenticationLogonHttpAuthenticateInstanceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AamAuthenticationLogonHttpAuthenticateInstanceState | undefined;
            resourceInputs["accountLock"] = state ? state.accountLock : undefined;
            resourceInputs["authMethod"] = state ? state.authMethod : undefined;
            resourceInputs["duration"] = state ? state.duration : undefined;
            resourceInputs["hstsTimeout"] = state ? state.hstsTimeout : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["packetCaptureTemplate"] = state ? state.packetCaptureTemplate : undefined;
            resourceInputs["retry"] = state ? state.retry : undefined;
            resourceInputs["samplingEnables"] = state ? state.samplingEnables : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as AamAuthenticationLogonHttpAuthenticateInstanceArgs | undefined;
            resourceInputs["accountLock"] = args ? args.accountLock : undefined;
            resourceInputs["authMethod"] = args ? args.authMethod : undefined;
            resourceInputs["duration"] = args ? args.duration : undefined;
            resourceInputs["hstsTimeout"] = args ? args.hstsTimeout : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["packetCaptureTemplate"] = args ? args.packetCaptureTemplate : undefined;
            resourceInputs["retry"] = args ? args.retry : undefined;
            resourceInputs["samplingEnables"] = args ? args.samplingEnables : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AamAuthenticationLogonHttpAuthenticateInstance.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AamAuthenticationLogonHttpAuthenticateInstance resources.
 */
export interface AamAuthenticationLogonHttpAuthenticateInstanceState {
    /**
     * Lock the account when the failed logon attempts is exceeded
     */
    accountLock?: pulumi.Input<number>;
    authMethod?: pulumi.Input<inputs.AamAuthenticationLogonHttpAuthenticateInstanceAuthMethod>;
    /**
     * The time an account remains locked in seconds (default 1800)
     */
    duration?: pulumi.Input<number>;
    /**
     * Set HSTS policy expired timeout in seconds, 0 means to disable HSTS policy
     */
    hstsTimeout?: pulumi.Input<number>;
    /**
     * Specify HTTP-Authenticate logon name
     */
    name?: pulumi.Input<string>;
    /**
     * Name of the packet capture template to be bind with this object
     */
    packetCaptureTemplate?: pulumi.Input<string>;
    /**
     * Maximum number of consecutive failed logon attempts (default 3)
     */
    retry?: pulumi.Input<number>;
    samplingEnables?: pulumi.Input<pulumi.Input<inputs.AamAuthenticationLogonHttpAuthenticateInstanceSamplingEnable>[]>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a AamAuthenticationLogonHttpAuthenticateInstance resource.
 */
export interface AamAuthenticationLogonHttpAuthenticateInstanceArgs {
    /**
     * Lock the account when the failed logon attempts is exceeded
     */
    accountLock?: pulumi.Input<number>;
    authMethod?: pulumi.Input<inputs.AamAuthenticationLogonHttpAuthenticateInstanceAuthMethod>;
    /**
     * The time an account remains locked in seconds (default 1800)
     */
    duration?: pulumi.Input<number>;
    /**
     * Set HSTS policy expired timeout in seconds, 0 means to disable HSTS policy
     */
    hstsTimeout?: pulumi.Input<number>;
    /**
     * Specify HTTP-Authenticate logon name
     */
    name?: pulumi.Input<string>;
    /**
     * Name of the packet capture template to be bind with this object
     */
    packetCaptureTemplate?: pulumi.Input<string>;
    /**
     * Maximum number of consecutive failed logon attempts (default 3)
     */
    retry?: pulumi.Input<number>;
    samplingEnables?: pulumi.Input<pulumi.Input<inputs.AamAuthenticationLogonHttpAuthenticateInstanceSamplingEnable>[]>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
