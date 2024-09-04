// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class AppProbeClassPolicyObject extends pulumi.CustomResource {
    /**
     * Get an existing AppProbeClassPolicyObject resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AppProbeClassPolicyObjectState, opts?: pulumi.CustomResourceOptions): AppProbeClassPolicyObject {
        return new AppProbeClassPolicyObject(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'sdwan:index/appProbeClassPolicyObject:AppProbeClassPolicyObject';

    /**
     * Returns true if the given object is an instance of AppProbeClassPolicyObject.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AppProbeClassPolicyObject {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AppProbeClassPolicyObject.__pulumiType;
    }

    /**
     * Forwarding class name
     */
    public readonly forwardingClass!: pulumi.Output<string>;
    /**
     * Color mappings
     */
    public readonly mappings!: pulumi.Output<outputs.AppProbeClassPolicyObjectMapping[]>;
    /**
     * The name of the policy object
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The version of the object
     */
    public /*out*/ readonly version!: pulumi.Output<number>;

    /**
     * Create a AppProbeClassPolicyObject resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AppProbeClassPolicyObjectArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AppProbeClassPolicyObjectArgs | AppProbeClassPolicyObjectState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AppProbeClassPolicyObjectState | undefined;
            resourceInputs["forwardingClass"] = state ? state.forwardingClass : undefined;
            resourceInputs["mappings"] = state ? state.mappings : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["version"] = state ? state.version : undefined;
        } else {
            const args = argsOrState as AppProbeClassPolicyObjectArgs | undefined;
            if ((!args || args.forwardingClass === undefined) && !opts.urn) {
                throw new Error("Missing required property 'forwardingClass'");
            }
            if ((!args || args.mappings === undefined) && !opts.urn) {
                throw new Error("Missing required property 'mappings'");
            }
            resourceInputs["forwardingClass"] = args ? args.forwardingClass : undefined;
            resourceInputs["mappings"] = args ? args.mappings : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AppProbeClassPolicyObject.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AppProbeClassPolicyObject resources.
 */
export interface AppProbeClassPolicyObjectState {
    /**
     * Forwarding class name
     */
    forwardingClass?: pulumi.Input<string>;
    /**
     * Color mappings
     */
    mappings?: pulumi.Input<pulumi.Input<inputs.AppProbeClassPolicyObjectMapping>[]>;
    /**
     * The name of the policy object
     */
    name?: pulumi.Input<string>;
    /**
     * The version of the object
     */
    version?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a AppProbeClassPolicyObject resource.
 */
export interface AppProbeClassPolicyObjectArgs {
    /**
     * Forwarding class name
     */
    forwardingClass: pulumi.Input<string>;
    /**
     * Color mappings
     */
    mappings: pulumi.Input<pulumi.Input<inputs.AppProbeClassPolicyObjectMapping>[]>;
    /**
     * The name of the policy object
     */
    name?: pulumi.Input<string>;
}
