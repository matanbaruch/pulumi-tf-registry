// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class AclPolicy extends pulumi.CustomResource {
    /**
     * Get an existing AclPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AclPolicyState, opts?: pulumi.CustomResourceOptions): AclPolicy {
        return new AclPolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'consul:index/aclPolicy:AclPolicy';

    /**
     * Returns true if the given object is an instance of AclPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AclPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AclPolicy.__pulumiType;
    }

    /**
     * The ACL policy datacenters.
     */
    public readonly datacenters!: pulumi.Output<string[] | undefined>;
    /**
     * The ACL policy description.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The ACL policy name.
     */
    public readonly name!: pulumi.Output<string>;
    public readonly namespace!: pulumi.Output<string | undefined>;
    /**
     * The partition the ACL policy is associated with.
     */
    public readonly partition!: pulumi.Output<string | undefined>;
    /**
     * The ACL policy rules.
     */
    public readonly rules!: pulumi.Output<string>;

    /**
     * Create a AclPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AclPolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AclPolicyArgs | AclPolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AclPolicyState | undefined;
            resourceInputs["datacenters"] = state ? state.datacenters : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["namespace"] = state ? state.namespace : undefined;
            resourceInputs["partition"] = state ? state.partition : undefined;
            resourceInputs["rules"] = state ? state.rules : undefined;
        } else {
            const args = argsOrState as AclPolicyArgs | undefined;
            if ((!args || args.rules === undefined) && !opts.urn) {
                throw new Error("Missing required property 'rules'");
            }
            resourceInputs["datacenters"] = args ? args.datacenters : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["namespace"] = args ? args.namespace : undefined;
            resourceInputs["partition"] = args ? args.partition : undefined;
            resourceInputs["rules"] = args ? args.rules : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AclPolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AclPolicy resources.
 */
export interface AclPolicyState {
    /**
     * The ACL policy datacenters.
     */
    datacenters?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The ACL policy description.
     */
    description?: pulumi.Input<string>;
    /**
     * The ACL policy name.
     */
    name?: pulumi.Input<string>;
    namespace?: pulumi.Input<string>;
    /**
     * The partition the ACL policy is associated with.
     */
    partition?: pulumi.Input<string>;
    /**
     * The ACL policy rules.
     */
    rules?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a AclPolicy resource.
 */
export interface AclPolicyArgs {
    /**
     * The ACL policy datacenters.
     */
    datacenters?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The ACL policy description.
     */
    description?: pulumi.Input<string>;
    /**
     * The ACL policy name.
     */
    name?: pulumi.Input<string>;
    namespace?: pulumi.Input<string>;
    /**
     * The partition the ACL policy is associated with.
     */
    partition?: pulumi.Input<string>;
    /**
     * The ACL policy rules.
     */
    rules: pulumi.Input<string>;
}
