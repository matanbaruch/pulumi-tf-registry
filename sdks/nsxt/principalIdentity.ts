// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class PrincipalIdentity extends pulumi.CustomResource {
    /**
     * Get an existing PrincipalIdentity resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PrincipalIdentityState, opts?: pulumi.CustomResourceOptions): PrincipalIdentity {
        return new PrincipalIdentity(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'nsxt:index/principalIdentity:PrincipalIdentity';

    /**
     * Returns true if the given object is an instance of PrincipalIdentity.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PrincipalIdentity {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PrincipalIdentity.__pulumiType;
    }

    /**
     * Id of the imported certificate pem
     */
    public /*out*/ readonly certificateId!: pulumi.Output<string>;
    /**
     * PEM encoding of the new certificate
     */
    public readonly certificatePem!: pulumi.Output<string>;
    /**
     * Indicates whether the entities created by this principal should be protected
     */
    public readonly isProtected!: pulumi.Output<boolean | undefined>;
    /**
     * Name of the principal
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Unique node-id of a principal
     */
    public readonly nodeId!: pulumi.Output<string>;
    /**
     * List of roles that are associated with the user, limiting them to a path
     */
    public readonly rolesForPaths!: pulumi.Output<outputs.PrincipalIdentityRolesForPath[]>;
    /**
     * Set of opaque identifiers meaningful to the user
     */
    public readonly tags!: pulumi.Output<outputs.PrincipalIdentityTag[] | undefined>;

    /**
     * Create a PrincipalIdentity resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PrincipalIdentityArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PrincipalIdentityArgs | PrincipalIdentityState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PrincipalIdentityState | undefined;
            resourceInputs["certificateId"] = state ? state.certificateId : undefined;
            resourceInputs["certificatePem"] = state ? state.certificatePem : undefined;
            resourceInputs["isProtected"] = state ? state.isProtected : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["nodeId"] = state ? state.nodeId : undefined;
            resourceInputs["rolesForPaths"] = state ? state.rolesForPaths : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as PrincipalIdentityArgs | undefined;
            if ((!args || args.certificatePem === undefined) && !opts.urn) {
                throw new Error("Missing required property 'certificatePem'");
            }
            if ((!args || args.nodeId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'nodeId'");
            }
            if ((!args || args.rolesForPaths === undefined) && !opts.urn) {
                throw new Error("Missing required property 'rolesForPaths'");
            }
            resourceInputs["certificatePem"] = args ? args.certificatePem : undefined;
            resourceInputs["isProtected"] = args ? args.isProtected : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["nodeId"] = args ? args.nodeId : undefined;
            resourceInputs["rolesForPaths"] = args ? args.rolesForPaths : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["certificateId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(PrincipalIdentity.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering PrincipalIdentity resources.
 */
export interface PrincipalIdentityState {
    /**
     * Id of the imported certificate pem
     */
    certificateId?: pulumi.Input<string>;
    /**
     * PEM encoding of the new certificate
     */
    certificatePem?: pulumi.Input<string>;
    /**
     * Indicates whether the entities created by this principal should be protected
     */
    isProtected?: pulumi.Input<boolean>;
    /**
     * Name of the principal
     */
    name?: pulumi.Input<string>;
    /**
     * Unique node-id of a principal
     */
    nodeId?: pulumi.Input<string>;
    /**
     * List of roles that are associated with the user, limiting them to a path
     */
    rolesForPaths?: pulumi.Input<pulumi.Input<inputs.PrincipalIdentityRolesForPath>[]>;
    /**
     * Set of opaque identifiers meaningful to the user
     */
    tags?: pulumi.Input<pulumi.Input<inputs.PrincipalIdentityTag>[]>;
}

/**
 * The set of arguments for constructing a PrincipalIdentity resource.
 */
export interface PrincipalIdentityArgs {
    /**
     * PEM encoding of the new certificate
     */
    certificatePem: pulumi.Input<string>;
    /**
     * Indicates whether the entities created by this principal should be protected
     */
    isProtected?: pulumi.Input<boolean>;
    /**
     * Name of the principal
     */
    name?: pulumi.Input<string>;
    /**
     * Unique node-id of a principal
     */
    nodeId: pulumi.Input<string>;
    /**
     * List of roles that are associated with the user, limiting them to a path
     */
    rolesForPaths: pulumi.Input<pulumi.Input<inputs.PrincipalIdentityRolesForPath>[]>;
    /**
     * Set of opaque identifiers meaningful to the user
     */
    tags?: pulumi.Input<pulumi.Input<inputs.PrincipalIdentityTag>[]>;
}
