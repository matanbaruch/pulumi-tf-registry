// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class RoleBindingV1 extends pulumi.CustomResource {
    /**
     * Get an existing RoleBindingV1 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RoleBindingV1State, opts?: pulumi.CustomResourceOptions): RoleBindingV1 {
        return new RoleBindingV1(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'kubernetes:index/roleBindingV1:RoleBindingV1';

    /**
     * Returns true if the given object is an instance of RoleBindingV1.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RoleBindingV1 {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RoleBindingV1.__pulumiType;
    }

    /**
     * Standard roleBinding's metadata. More info:
     * https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata
     */
    public readonly metadata!: pulumi.Output<outputs.RoleBindingV1Metadata>;
    /**
     * RoleRef references the Role for this binding
     */
    public readonly roleRef!: pulumi.Output<outputs.RoleBindingV1RoleRef>;
    /**
     * Subjects defines the entities to bind a Role to.
     */
    public readonly subjects!: pulumi.Output<outputs.RoleBindingV1Subject[]>;

    /**
     * Create a RoleBindingV1 resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RoleBindingV1Args, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RoleBindingV1Args | RoleBindingV1State, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RoleBindingV1State | undefined;
            resourceInputs["metadata"] = state ? state.metadata : undefined;
            resourceInputs["roleRef"] = state ? state.roleRef : undefined;
            resourceInputs["subjects"] = state ? state.subjects : undefined;
        } else {
            const args = argsOrState as RoleBindingV1Args | undefined;
            if ((!args || args.metadata === undefined) && !opts.urn) {
                throw new Error("Missing required property 'metadata'");
            }
            if ((!args || args.roleRef === undefined) && !opts.urn) {
                throw new Error("Missing required property 'roleRef'");
            }
            if ((!args || args.subjects === undefined) && !opts.urn) {
                throw new Error("Missing required property 'subjects'");
            }
            resourceInputs["metadata"] = args ? args.metadata : undefined;
            resourceInputs["roleRef"] = args ? args.roleRef : undefined;
            resourceInputs["subjects"] = args ? args.subjects : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(RoleBindingV1.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering RoleBindingV1 resources.
 */
export interface RoleBindingV1State {
    /**
     * Standard roleBinding's metadata. More info:
     * https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata
     */
    metadata?: pulumi.Input<inputs.RoleBindingV1Metadata>;
    /**
     * RoleRef references the Role for this binding
     */
    roleRef?: pulumi.Input<inputs.RoleBindingV1RoleRef>;
    /**
     * Subjects defines the entities to bind a Role to.
     */
    subjects?: pulumi.Input<pulumi.Input<inputs.RoleBindingV1Subject>[]>;
}

/**
 * The set of arguments for constructing a RoleBindingV1 resource.
 */
export interface RoleBindingV1Args {
    /**
     * Standard roleBinding's metadata. More info:
     * https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata
     */
    metadata: pulumi.Input<inputs.RoleBindingV1Metadata>;
    /**
     * RoleRef references the Role for this binding
     */
    roleRef: pulumi.Input<inputs.RoleBindingV1RoleRef>;
    /**
     * Subjects defines the entities to bind a Role to.
     */
    subjects: pulumi.Input<pulumi.Input<inputs.RoleBindingV1Subject>[]>;
}
