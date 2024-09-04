// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SsoDefaultRoles extends pulumi.CustomResource {
    /**
     * Get an existing SsoDefaultRoles resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SsoDefaultRolesState, opts?: pulumi.CustomResourceOptions): SsoDefaultRoles {
        return new SsoDefaultRoles(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'materialize:index/ssoDefaultRoles:SsoDefaultRoles';

    /**
     * Returns true if the given object is an instance of SsoDefaultRoles.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SsoDefaultRoles {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SsoDefaultRoles.__pulumiType;
    }

    /**
     * Set of default role names for the SSO configuration. These roles will be assigned by default to users who sign up via
     * SSO.
     */
    public readonly roles!: pulumi.Output<string[]>;
    /**
     * The ID of the associated SSO configuration.
     */
    public readonly ssoConfigId!: pulumi.Output<string>;

    /**
     * Create a SsoDefaultRoles resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SsoDefaultRolesArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SsoDefaultRolesArgs | SsoDefaultRolesState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SsoDefaultRolesState | undefined;
            resourceInputs["roles"] = state ? state.roles : undefined;
            resourceInputs["ssoConfigId"] = state ? state.ssoConfigId : undefined;
        } else {
            const args = argsOrState as SsoDefaultRolesArgs | undefined;
            if ((!args || args.roles === undefined) && !opts.urn) {
                throw new Error("Missing required property 'roles'");
            }
            if ((!args || args.ssoConfigId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ssoConfigId'");
            }
            resourceInputs["roles"] = args ? args.roles : undefined;
            resourceInputs["ssoConfigId"] = args ? args.ssoConfigId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SsoDefaultRoles.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SsoDefaultRoles resources.
 */
export interface SsoDefaultRolesState {
    /**
     * Set of default role names for the SSO configuration. These roles will be assigned by default to users who sign up via
     * SSO.
     */
    roles?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The ID of the associated SSO configuration.
     */
    ssoConfigId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SsoDefaultRoles resource.
 */
export interface SsoDefaultRolesArgs {
    /**
     * Set of default role names for the SSO configuration. These roles will be assigned by default to users who sign up via
     * SSO.
     */
    roles: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The ID of the associated SSO configuration.
     */
    ssoConfigId: pulumi.Input<string>;
}
