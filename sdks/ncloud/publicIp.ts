// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class PublicIp extends pulumi.CustomResource {
    /**
     * Get an existing PublicIp resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PublicIpState, opts?: pulumi.CustomResourceOptions): PublicIp {
        return new PublicIp(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'ncloud:index/publicIp:PublicIp';

    /**
     * Returns true if the given object is an instance of PublicIp.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PublicIp {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PublicIp.__pulumiType;
    }

    public readonly description!: pulumi.Output<string>;
    /**
     * @deprecated Deprecated
     */
    public /*out*/ readonly instanceNo!: pulumi.Output<string>;
    /**
     * @deprecated Deprecated
     */
    public readonly internetLineType!: pulumi.Output<string>;
    public /*out*/ readonly kindType!: pulumi.Output<string>;
    public /*out*/ readonly publicIp!: pulumi.Output<string>;
    public /*out*/ readonly publicIpNo!: pulumi.Output<string>;
    public readonly serverInstanceNo!: pulumi.Output<string | undefined>;
    public readonly zone!: pulumi.Output<string>;

    /**
     * Create a PublicIp resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: PublicIpArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PublicIpArgs | PublicIpState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PublicIpState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["instanceNo"] = state ? state.instanceNo : undefined;
            resourceInputs["internetLineType"] = state ? state.internetLineType : undefined;
            resourceInputs["kindType"] = state ? state.kindType : undefined;
            resourceInputs["publicIp"] = state ? state.publicIp : undefined;
            resourceInputs["publicIpNo"] = state ? state.publicIpNo : undefined;
            resourceInputs["serverInstanceNo"] = state ? state.serverInstanceNo : undefined;
            resourceInputs["zone"] = state ? state.zone : undefined;
        } else {
            const args = argsOrState as PublicIpArgs | undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["internetLineType"] = args ? args.internetLineType : undefined;
            resourceInputs["serverInstanceNo"] = args ? args.serverInstanceNo : undefined;
            resourceInputs["zone"] = args ? args.zone : undefined;
            resourceInputs["instanceNo"] = undefined /*out*/;
            resourceInputs["kindType"] = undefined /*out*/;
            resourceInputs["publicIp"] = undefined /*out*/;
            resourceInputs["publicIpNo"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(PublicIp.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering PublicIp resources.
 */
export interface PublicIpState {
    description?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated
     */
    instanceNo?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated
     */
    internetLineType?: pulumi.Input<string>;
    kindType?: pulumi.Input<string>;
    publicIp?: pulumi.Input<string>;
    publicIpNo?: pulumi.Input<string>;
    serverInstanceNo?: pulumi.Input<string>;
    zone?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a PublicIp resource.
 */
export interface PublicIpArgs {
    description?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated
     */
    internetLineType?: pulumi.Input<string>;
    serverInstanceNo?: pulumi.Input<string>;
    zone?: pulumi.Input<string>;
}
