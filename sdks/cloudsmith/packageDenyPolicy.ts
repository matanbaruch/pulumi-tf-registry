// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class PackageDenyPolicy extends pulumi.CustomResource {
    /**
     * Get an existing PackageDenyPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PackageDenyPolicyState, opts?: pulumi.CustomResourceOptions): PackageDenyPolicy {
        return new PackageDenyPolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'cloudsmith:index/packageDenyPolicy:PackageDenyPolicy';

    /**
     * Returns true if the given object is an instance of PackageDenyPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PackageDenyPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PackageDenyPolicy.__pulumiType;
    }

    /**
     * Description of the package deny policy.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Is the package deny policy enabled?.
     */
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    /**
     * A descriptive name for the package deny policy.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Namespace to which this package deny policy belongs.
     */
    public readonly namespace!: pulumi.Output<string>;
    /**
     * The query to match the packages to be blocked.
     */
    public readonly packageQuery!: pulumi.Output<string>;

    /**
     * Create a PackageDenyPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PackageDenyPolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PackageDenyPolicyArgs | PackageDenyPolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PackageDenyPolicyState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["namespace"] = state ? state.namespace : undefined;
            resourceInputs["packageQuery"] = state ? state.packageQuery : undefined;
        } else {
            const args = argsOrState as PackageDenyPolicyArgs | undefined;
            if ((!args || args.namespace === undefined) && !opts.urn) {
                throw new Error("Missing required property 'namespace'");
            }
            if ((!args || args.packageQuery === undefined) && !opts.urn) {
                throw new Error("Missing required property 'packageQuery'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["namespace"] = args ? args.namespace : undefined;
            resourceInputs["packageQuery"] = args ? args.packageQuery : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(PackageDenyPolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering PackageDenyPolicy resources.
 */
export interface PackageDenyPolicyState {
    /**
     * Description of the package deny policy.
     */
    description?: pulumi.Input<string>;
    /**
     * Is the package deny policy enabled?.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * A descriptive name for the package deny policy.
     */
    name?: pulumi.Input<string>;
    /**
     * Namespace to which this package deny policy belongs.
     */
    namespace?: pulumi.Input<string>;
    /**
     * The query to match the packages to be blocked.
     */
    packageQuery?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a PackageDenyPolicy resource.
 */
export interface PackageDenyPolicyArgs {
    /**
     * Description of the package deny policy.
     */
    description?: pulumi.Input<string>;
    /**
     * Is the package deny policy enabled?.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * A descriptive name for the package deny policy.
     */
    name?: pulumi.Input<string>;
    /**
     * Namespace to which this package deny policy belongs.
     */
    namespace: pulumi.Input<string>;
    /**
     * The query to match the packages to be blocked.
     */
    packageQuery: pulumi.Input<string>;
}
