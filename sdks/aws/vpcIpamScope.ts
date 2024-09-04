// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class VpcIpamScope extends pulumi.CustomResource {
    /**
     * Get an existing VpcIpamScope resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VpcIpamScopeState, opts?: pulumi.CustomResourceOptions): VpcIpamScope {
        return new VpcIpamScope(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/vpcIpamScope:VpcIpamScope';

    /**
     * Returns true if the given object is an instance of VpcIpamScope.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VpcIpamScope {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VpcIpamScope.__pulumiType;
    }

    public /*out*/ readonly arn!: pulumi.Output<string>;
    public readonly description!: pulumi.Output<string | undefined>;
    public /*out*/ readonly ipamArn!: pulumi.Output<string>;
    public readonly ipamId!: pulumi.Output<string>;
    public /*out*/ readonly ipamScopeType!: pulumi.Output<string>;
    public /*out*/ readonly isDefault!: pulumi.Output<boolean>;
    public /*out*/ readonly poolCount!: pulumi.Output<number>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly tagsAll!: pulumi.Output<{[key: string]: string}>;
    public readonly timeouts!: pulumi.Output<outputs.VpcIpamScopeTimeouts | undefined>;

    /**
     * Create a VpcIpamScope resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VpcIpamScopeArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VpcIpamScopeArgs | VpcIpamScopeState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VpcIpamScopeState | undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["ipamArn"] = state ? state.ipamArn : undefined;
            resourceInputs["ipamId"] = state ? state.ipamId : undefined;
            resourceInputs["ipamScopeType"] = state ? state.ipamScopeType : undefined;
            resourceInputs["isDefault"] = state ? state.isDefault : undefined;
            resourceInputs["poolCount"] = state ? state.poolCount : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["tagsAll"] = state ? state.tagsAll : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as VpcIpamScopeArgs | undefined;
            if ((!args || args.ipamId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ipamId'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["ipamId"] = args ? args.ipamId : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tagsAll"] = args ? args.tagsAll : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["arn"] = undefined /*out*/;
            resourceInputs["ipamArn"] = undefined /*out*/;
            resourceInputs["ipamScopeType"] = undefined /*out*/;
            resourceInputs["isDefault"] = undefined /*out*/;
            resourceInputs["poolCount"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(VpcIpamScope.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VpcIpamScope resources.
 */
export interface VpcIpamScopeState {
    arn?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    ipamArn?: pulumi.Input<string>;
    ipamId?: pulumi.Input<string>;
    ipamScopeType?: pulumi.Input<string>;
    isDefault?: pulumi.Input<boolean>;
    poolCount?: pulumi.Input<number>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.VpcIpamScopeTimeouts>;
}

/**
 * The set of arguments for constructing a VpcIpamScope resource.
 */
export interface VpcIpamScopeArgs {
    description?: pulumi.Input<string>;
    ipamId: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.VpcIpamScopeTimeouts>;
}
