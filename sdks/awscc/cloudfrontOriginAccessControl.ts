// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class CloudfrontOriginAccessControl extends pulumi.CustomResource {
    /**
     * Get an existing CloudfrontOriginAccessControl resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CloudfrontOriginAccessControlState, opts?: pulumi.CustomResourceOptions): CloudfrontOriginAccessControl {
        return new CloudfrontOriginAccessControl(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/cloudfrontOriginAccessControl:CloudfrontOriginAccessControl';

    /**
     * Returns true if the given object is an instance of CloudfrontOriginAccessControl.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CloudfrontOriginAccessControl {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CloudfrontOriginAccessControl.__pulumiType;
    }

    public readonly originAccessControlConfig!: pulumi.Output<outputs.CloudfrontOriginAccessControlOriginAccessControlConfig>;
    public /*out*/ readonly originAccessControlId!: pulumi.Output<string>;

    /**
     * Create a CloudfrontOriginAccessControl resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CloudfrontOriginAccessControlArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CloudfrontOriginAccessControlArgs | CloudfrontOriginAccessControlState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CloudfrontOriginAccessControlState | undefined;
            resourceInputs["originAccessControlConfig"] = state ? state.originAccessControlConfig : undefined;
            resourceInputs["originAccessControlId"] = state ? state.originAccessControlId : undefined;
        } else {
            const args = argsOrState as CloudfrontOriginAccessControlArgs | undefined;
            if ((!args || args.originAccessControlConfig === undefined) && !opts.urn) {
                throw new Error("Missing required property 'originAccessControlConfig'");
            }
            resourceInputs["originAccessControlConfig"] = args ? args.originAccessControlConfig : undefined;
            resourceInputs["originAccessControlId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CloudfrontOriginAccessControl.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CloudfrontOriginAccessControl resources.
 */
export interface CloudfrontOriginAccessControlState {
    originAccessControlConfig?: pulumi.Input<inputs.CloudfrontOriginAccessControlOriginAccessControlConfig>;
    originAccessControlId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a CloudfrontOriginAccessControl resource.
 */
export interface CloudfrontOriginAccessControlArgs {
    originAccessControlConfig: pulumi.Input<inputs.CloudfrontOriginAccessControlOriginAccessControlConfig>;
}
