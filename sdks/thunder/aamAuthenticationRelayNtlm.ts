// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class AamAuthenticationRelayNtlm extends pulumi.CustomResource {
    /**
     * Get an existing AamAuthenticationRelayNtlm resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AamAuthenticationRelayNtlmState, opts?: pulumi.CustomResourceOptions): AamAuthenticationRelayNtlm {
        return new AamAuthenticationRelayNtlm(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/aamAuthenticationRelayNtlm:AamAuthenticationRelayNtlm';

    /**
     * Returns true if the given object is an instance of AamAuthenticationRelayNtlm.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AamAuthenticationRelayNtlm {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AamAuthenticationRelayNtlm.__pulumiType;
    }

    /**
     * Specify NTLM domain, default is null
     */
    public readonly domain!: pulumi.Output<string | undefined>;
    /**
     * Disable NTLM relay processing for large requests
     */
    public readonly largeRequestDisable!: pulumi.Output<number | undefined>;
    /**
     * Specify NTLM authentication relay name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Name of the packet capture template to be bind with this object
     */
    public readonly packetCaptureTemplate!: pulumi.Output<string | undefined>;
    public readonly samplingEnables!: pulumi.Output<outputs.AamAuthenticationRelayNtlmSamplingEnable[] | undefined>;
    /**
     * Customized tag
     */
    public readonly userTag!: pulumi.Output<string | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;
    /**
     * Specify NTLM version, default is NTLM 2
     */
    public readonly version!: pulumi.Output<number | undefined>;

    /**
     * Create a AamAuthenticationRelayNtlm resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: AamAuthenticationRelayNtlmArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AamAuthenticationRelayNtlmArgs | AamAuthenticationRelayNtlmState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AamAuthenticationRelayNtlmState | undefined;
            resourceInputs["domain"] = state ? state.domain : undefined;
            resourceInputs["largeRequestDisable"] = state ? state.largeRequestDisable : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["packetCaptureTemplate"] = state ? state.packetCaptureTemplate : undefined;
            resourceInputs["samplingEnables"] = state ? state.samplingEnables : undefined;
            resourceInputs["userTag"] = state ? state.userTag : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
            resourceInputs["version"] = state ? state.version : undefined;
        } else {
            const args = argsOrState as AamAuthenticationRelayNtlmArgs | undefined;
            resourceInputs["domain"] = args ? args.domain : undefined;
            resourceInputs["largeRequestDisable"] = args ? args.largeRequestDisable : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["packetCaptureTemplate"] = args ? args.packetCaptureTemplate : undefined;
            resourceInputs["samplingEnables"] = args ? args.samplingEnables : undefined;
            resourceInputs["userTag"] = args ? args.userTag : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
            resourceInputs["version"] = args ? args.version : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AamAuthenticationRelayNtlm.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AamAuthenticationRelayNtlm resources.
 */
export interface AamAuthenticationRelayNtlmState {
    /**
     * Specify NTLM domain, default is null
     */
    domain?: pulumi.Input<string>;
    /**
     * Disable NTLM relay processing for large requests
     */
    largeRequestDisable?: pulumi.Input<number>;
    /**
     * Specify NTLM authentication relay name
     */
    name?: pulumi.Input<string>;
    /**
     * Name of the packet capture template to be bind with this object
     */
    packetCaptureTemplate?: pulumi.Input<string>;
    samplingEnables?: pulumi.Input<pulumi.Input<inputs.AamAuthenticationRelayNtlmSamplingEnable>[]>;
    /**
     * Customized tag
     */
    userTag?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
    /**
     * Specify NTLM version, default is NTLM 2
     */
    version?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a AamAuthenticationRelayNtlm resource.
 */
export interface AamAuthenticationRelayNtlmArgs {
    /**
     * Specify NTLM domain, default is null
     */
    domain?: pulumi.Input<string>;
    /**
     * Disable NTLM relay processing for large requests
     */
    largeRequestDisable?: pulumi.Input<number>;
    /**
     * Specify NTLM authentication relay name
     */
    name?: pulumi.Input<string>;
    /**
     * Name of the packet capture template to be bind with this object
     */
    packetCaptureTemplate?: pulumi.Input<string>;
    samplingEnables?: pulumi.Input<pulumi.Input<inputs.AamAuthenticationRelayNtlmSamplingEnable>[]>;
    /**
     * Customized tag
     */
    userTag?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
    /**
     * Specify NTLM version, default is NTLM 2
     */
    version?: pulumi.Input<number>;
}
