// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class LakeformationPrincipalPermissions extends pulumi.CustomResource {
    /**
     * Get an existing LakeformationPrincipalPermissions resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LakeformationPrincipalPermissionsState, opts?: pulumi.CustomResourceOptions): LakeformationPrincipalPermissions {
        return new LakeformationPrincipalPermissions(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/lakeformationPrincipalPermissions:LakeformationPrincipalPermissions';

    /**
     * Returns true if the given object is an instance of LakeformationPrincipalPermissions.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LakeformationPrincipalPermissions {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LakeformationPrincipalPermissions.__pulumiType;
    }

    /**
     * The identifier for the GLUDC. By default, the account ID. The GLUDC is the persistent metadata store. It contains
     * database definitions, table definitions, and other control information to manage your Lake Formation environment.
     */
    public readonly catalog!: pulumi.Output<string>;
    /**
     * The permissions granted or revoked.
     */
    public readonly permissions!: pulumi.Output<string[]>;
    /**
     * Indicates the ability to grant permissions (as a subset of permissions granted).
     */
    public readonly permissionsWithGrantOptions!: pulumi.Output<string[]>;
    /**
     * The principal to be granted a permission.
     */
    public readonly principal!: pulumi.Output<outputs.LakeformationPrincipalPermissionsPrincipal>;
    public /*out*/ readonly principalIdentifier!: pulumi.Output<string>;
    /**
     * The resource to be granted or revoked permissions.
     */
    public readonly resource!: pulumi.Output<outputs.LakeformationPrincipalPermissionsResource>;
    public /*out*/ readonly resourceIdentifier!: pulumi.Output<string>;

    /**
     * Create a LakeformationPrincipalPermissions resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LakeformationPrincipalPermissionsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LakeformationPrincipalPermissionsArgs | LakeformationPrincipalPermissionsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LakeformationPrincipalPermissionsState | undefined;
            resourceInputs["catalog"] = state ? state.catalog : undefined;
            resourceInputs["permissions"] = state ? state.permissions : undefined;
            resourceInputs["permissionsWithGrantOptions"] = state ? state.permissionsWithGrantOptions : undefined;
            resourceInputs["principal"] = state ? state.principal : undefined;
            resourceInputs["principalIdentifier"] = state ? state.principalIdentifier : undefined;
            resourceInputs["resource"] = state ? state.resource : undefined;
            resourceInputs["resourceIdentifier"] = state ? state.resourceIdentifier : undefined;
        } else {
            const args = argsOrState as LakeformationPrincipalPermissionsArgs | undefined;
            if ((!args || args.permissions === undefined) && !opts.urn) {
                throw new Error("Missing required property 'permissions'");
            }
            if ((!args || args.permissionsWithGrantOptions === undefined) && !opts.urn) {
                throw new Error("Missing required property 'permissionsWithGrantOptions'");
            }
            if ((!args || args.principal === undefined) && !opts.urn) {
                throw new Error("Missing required property 'principal'");
            }
            if ((!args || args.resource === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resource'");
            }
            resourceInputs["catalog"] = args ? args.catalog : undefined;
            resourceInputs["permissions"] = args ? args.permissions : undefined;
            resourceInputs["permissionsWithGrantOptions"] = args ? args.permissionsWithGrantOptions : undefined;
            resourceInputs["principal"] = args ? args.principal : undefined;
            resourceInputs["resource"] = args ? args.resource : undefined;
            resourceInputs["principalIdentifier"] = undefined /*out*/;
            resourceInputs["resourceIdentifier"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(LakeformationPrincipalPermissions.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering LakeformationPrincipalPermissions resources.
 */
export interface LakeformationPrincipalPermissionsState {
    /**
     * The identifier for the GLUDC. By default, the account ID. The GLUDC is the persistent metadata store. It contains
     * database definitions, table definitions, and other control information to manage your Lake Formation environment.
     */
    catalog?: pulumi.Input<string>;
    /**
     * The permissions granted or revoked.
     */
    permissions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Indicates the ability to grant permissions (as a subset of permissions granted).
     */
    permissionsWithGrantOptions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The principal to be granted a permission.
     */
    principal?: pulumi.Input<inputs.LakeformationPrincipalPermissionsPrincipal>;
    principalIdentifier?: pulumi.Input<string>;
    /**
     * The resource to be granted or revoked permissions.
     */
    resource?: pulumi.Input<inputs.LakeformationPrincipalPermissionsResource>;
    resourceIdentifier?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a LakeformationPrincipalPermissions resource.
 */
export interface LakeformationPrincipalPermissionsArgs {
    /**
     * The identifier for the GLUDC. By default, the account ID. The GLUDC is the persistent metadata store. It contains
     * database definitions, table definitions, and other control information to manage your Lake Formation environment.
     */
    catalog?: pulumi.Input<string>;
    /**
     * The permissions granted or revoked.
     */
    permissions: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Indicates the ability to grant permissions (as a subset of permissions granted).
     */
    permissionsWithGrantOptions: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The principal to be granted a permission.
     */
    principal: pulumi.Input<inputs.LakeformationPrincipalPermissionsPrincipal>;
    /**
     * The resource to be granted or revoked permissions.
     */
    resource: pulumi.Input<inputs.LakeformationPrincipalPermissionsResource>;
}
