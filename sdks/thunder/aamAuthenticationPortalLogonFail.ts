// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class AamAuthenticationPortalLogonFail extends pulumi.CustomResource {
    /**
     * Get an existing AamAuthenticationPortalLogonFail resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AamAuthenticationPortalLogonFailState, opts?: pulumi.CustomResourceOptions): AamAuthenticationPortalLogonFail {
        return new AamAuthenticationPortalLogonFail(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/aamAuthenticationPortalLogonFail:AamAuthenticationPortalLogonFail';

    /**
     * Returns true if the given object is an instance of AamAuthenticationPortalLogonFail.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AamAuthenticationPortalLogonFail {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AamAuthenticationPortalLogonFail.__pulumiType;
    }

    public readonly background!: pulumi.Output<outputs.AamAuthenticationPortalLogonFailBackground | undefined>;
    public readonly failMsgCfg!: pulumi.Output<outputs.AamAuthenticationPortalLogonFailFailMsgCfg | undefined>;
    /**
     * Name
     */
    public readonly name!: pulumi.Output<string>;
    public readonly titleCfg!: pulumi.Output<outputs.AamAuthenticationPortalLogonFailTitleCfg | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a AamAuthenticationPortalLogonFail resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: AamAuthenticationPortalLogonFailArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AamAuthenticationPortalLogonFailArgs | AamAuthenticationPortalLogonFailState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AamAuthenticationPortalLogonFailState | undefined;
            resourceInputs["background"] = state ? state.background : undefined;
            resourceInputs["failMsgCfg"] = state ? state.failMsgCfg : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["titleCfg"] = state ? state.titleCfg : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as AamAuthenticationPortalLogonFailArgs | undefined;
            resourceInputs["background"] = args ? args.background : undefined;
            resourceInputs["failMsgCfg"] = args ? args.failMsgCfg : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["titleCfg"] = args ? args.titleCfg : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AamAuthenticationPortalLogonFail.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AamAuthenticationPortalLogonFail resources.
 */
export interface AamAuthenticationPortalLogonFailState {
    background?: pulumi.Input<inputs.AamAuthenticationPortalLogonFailBackground>;
    failMsgCfg?: pulumi.Input<inputs.AamAuthenticationPortalLogonFailFailMsgCfg>;
    /**
     * Name
     */
    name?: pulumi.Input<string>;
    titleCfg?: pulumi.Input<inputs.AamAuthenticationPortalLogonFailTitleCfg>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a AamAuthenticationPortalLogonFail resource.
 */
export interface AamAuthenticationPortalLogonFailArgs {
    background?: pulumi.Input<inputs.AamAuthenticationPortalLogonFailBackground>;
    failMsgCfg?: pulumi.Input<inputs.AamAuthenticationPortalLogonFailFailMsgCfg>;
    /**
     * Name
     */
    name?: pulumi.Input<string>;
    titleCfg?: pulumi.Input<inputs.AamAuthenticationPortalLogonFailTitleCfg>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
