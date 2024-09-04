// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class IpsPolicies extends pulumi.CustomResource {
    /**
     * Get an existing IpsPolicies resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IpsPoliciesState, opts?: pulumi.CustomResourceOptions): IpsPolicies {
        return new IpsPolicies(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fmc:index/ipsPolicies:IpsPolicies';

    /**
     * Returns true if the given object is an instance of IpsPolicies.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IpsPolicies {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IpsPolicies.__pulumiType;
    }

    /**
     * Id of the base policy
     */
    public readonly basepolicyId!: pulumi.Output<string>;
    /**
     * Name of the base policy
     */
    public readonly basepolicyName!: pulumi.Output<string | undefined>;
    /**
     * The inspection mode of this policy
     */
    public readonly inspectionMode!: pulumi.Output<string>;
    /**
     * The name of this resource
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The type of this resource
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a IpsPolicies resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IpsPoliciesArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IpsPoliciesArgs | IpsPoliciesState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IpsPoliciesState | undefined;
            resourceInputs["basepolicyId"] = state ? state.basepolicyId : undefined;
            resourceInputs["basepolicyName"] = state ? state.basepolicyName : undefined;
            resourceInputs["inspectionMode"] = state ? state.inspectionMode : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as IpsPoliciesArgs | undefined;
            if ((!args || args.basepolicyId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'basepolicyId'");
            }
            if ((!args || args.inspectionMode === undefined) && !opts.urn) {
                throw new Error("Missing required property 'inspectionMode'");
            }
            resourceInputs["basepolicyId"] = args ? args.basepolicyId : undefined;
            resourceInputs["basepolicyName"] = args ? args.basepolicyName : undefined;
            resourceInputs["inspectionMode"] = args ? args.inspectionMode : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IpsPolicies.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering IpsPolicies resources.
 */
export interface IpsPoliciesState {
    /**
     * Id of the base policy
     */
    basepolicyId?: pulumi.Input<string>;
    /**
     * Name of the base policy
     */
    basepolicyName?: pulumi.Input<string>;
    /**
     * The inspection mode of this policy
     */
    inspectionMode?: pulumi.Input<string>;
    /**
     * The name of this resource
     */
    name?: pulumi.Input<string>;
    /**
     * The type of this resource
     */
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a IpsPolicies resource.
 */
export interface IpsPoliciesArgs {
    /**
     * Id of the base policy
     */
    basepolicyId: pulumi.Input<string>;
    /**
     * Name of the base policy
     */
    basepolicyName?: pulumi.Input<string>;
    /**
     * The inspection mode of this policy
     */
    inspectionMode: pulumi.Input<string>;
    /**
     * The name of this resource
     */
    name?: pulumi.Input<string>;
}
