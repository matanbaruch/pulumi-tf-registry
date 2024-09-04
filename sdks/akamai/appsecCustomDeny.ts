// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class AppsecCustomDeny extends pulumi.CustomResource {
    /**
     * Get an existing AppsecCustomDeny resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AppsecCustomDenyState, opts?: pulumi.CustomResourceOptions): AppsecCustomDeny {
        return new AppsecCustomDeny(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'akamai:index/appsecCustomDeny:AppsecCustomDeny';

    /**
     * Returns true if the given object is an instance of AppsecCustomDeny.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AppsecCustomDeny {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AppsecCustomDeny.__pulumiType;
    }

    /**
     * Unique identifier of the security configuration
     */
    public readonly configId!: pulumi.Output<number>;
    /**
     * JSON-formatted information about the properties and property values for the custom deny
     */
    public readonly customDeny!: pulumi.Output<string>;
    /**
     * custom_deny_id
     */
    public /*out*/ readonly customDenyId!: pulumi.Output<string>;

    /**
     * Create a AppsecCustomDeny resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AppsecCustomDenyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AppsecCustomDenyArgs | AppsecCustomDenyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AppsecCustomDenyState | undefined;
            resourceInputs["configId"] = state ? state.configId : undefined;
            resourceInputs["customDeny"] = state ? state.customDeny : undefined;
            resourceInputs["customDenyId"] = state ? state.customDenyId : undefined;
        } else {
            const args = argsOrState as AppsecCustomDenyArgs | undefined;
            if ((!args || args.configId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'configId'");
            }
            if ((!args || args.customDeny === undefined) && !opts.urn) {
                throw new Error("Missing required property 'customDeny'");
            }
            resourceInputs["configId"] = args ? args.configId : undefined;
            resourceInputs["customDeny"] = args ? args.customDeny : undefined;
            resourceInputs["customDenyId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AppsecCustomDeny.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AppsecCustomDeny resources.
 */
export interface AppsecCustomDenyState {
    /**
     * Unique identifier of the security configuration
     */
    configId?: pulumi.Input<number>;
    /**
     * JSON-formatted information about the properties and property values for the custom deny
     */
    customDeny?: pulumi.Input<string>;
    /**
     * custom_deny_id
     */
    customDenyId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a AppsecCustomDeny resource.
 */
export interface AppsecCustomDenyArgs {
    /**
     * Unique identifier of the security configuration
     */
    configId: pulumi.Input<number>;
    /**
     * JSON-formatted information about the properties and property values for the custom deny
     */
    customDeny: pulumi.Input<string>;
}
