// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class IdentityPlatformTenant extends pulumi.CustomResource {
    /**
     * Get an existing IdentityPlatformTenant resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IdentityPlatformTenantState, opts?: pulumi.CustomResourceOptions): IdentityPlatformTenant {
        return new IdentityPlatformTenant(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google:index/identityPlatformTenant:IdentityPlatformTenant';

    /**
     * Returns true if the given object is an instance of IdentityPlatformTenant.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IdentityPlatformTenant {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IdentityPlatformTenant.__pulumiType;
    }

    /**
     * Whether to allow email/password user authentication.
     */
    public readonly allowPasswordSignup!: pulumi.Output<boolean | undefined>;
    /**
     * Whether authentication is disabled for the tenant. If true, the users under the disabled tenant are not allowed to
     * sign-in. Admins of the disabled tenant are not able to manage its users.
     */
    public readonly disableAuth!: pulumi.Output<boolean | undefined>;
    /**
     * Human friendly display name of the tenant.
     */
    public readonly displayName!: pulumi.Output<string>;
    /**
     * Whether to enable email link user authentication.
     */
    public readonly enableEmailLinkSignin!: pulumi.Output<boolean | undefined>;
    /**
     * The name of the tenant that is generated by the server
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    public readonly project!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.IdentityPlatformTenantTimeouts | undefined>;

    /**
     * Create a IdentityPlatformTenant resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IdentityPlatformTenantArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IdentityPlatformTenantArgs | IdentityPlatformTenantState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IdentityPlatformTenantState | undefined;
            resourceInputs["allowPasswordSignup"] = state ? state.allowPasswordSignup : undefined;
            resourceInputs["disableAuth"] = state ? state.disableAuth : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["enableEmailLinkSignin"] = state ? state.enableEmailLinkSignin : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as IdentityPlatformTenantArgs | undefined;
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            resourceInputs["allowPasswordSignup"] = args ? args.allowPasswordSignup : undefined;
            resourceInputs["disableAuth"] = args ? args.disableAuth : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["enableEmailLinkSignin"] = args ? args.enableEmailLinkSignin : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["name"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IdentityPlatformTenant.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering IdentityPlatformTenant resources.
 */
export interface IdentityPlatformTenantState {
    /**
     * Whether to allow email/password user authentication.
     */
    allowPasswordSignup?: pulumi.Input<boolean>;
    /**
     * Whether authentication is disabled for the tenant. If true, the users under the disabled tenant are not allowed to
     * sign-in. Admins of the disabled tenant are not able to manage its users.
     */
    disableAuth?: pulumi.Input<boolean>;
    /**
     * Human friendly display name of the tenant.
     */
    displayName?: pulumi.Input<string>;
    /**
     * Whether to enable email link user authentication.
     */
    enableEmailLinkSignin?: pulumi.Input<boolean>;
    /**
     * The name of the tenant that is generated by the server
     */
    name?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.IdentityPlatformTenantTimeouts>;
}

/**
 * The set of arguments for constructing a IdentityPlatformTenant resource.
 */
export interface IdentityPlatformTenantArgs {
    /**
     * Whether to allow email/password user authentication.
     */
    allowPasswordSignup?: pulumi.Input<boolean>;
    /**
     * Whether authentication is disabled for the tenant. If true, the users under the disabled tenant are not allowed to
     * sign-in. Admins of the disabled tenant are not able to manage its users.
     */
    disableAuth?: pulumi.Input<boolean>;
    /**
     * Human friendly display name of the tenant.
     */
    displayName: pulumi.Input<string>;
    /**
     * Whether to enable email link user authentication.
     */
    enableEmailLinkSignin?: pulumi.Input<boolean>;
    project?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.IdentityPlatformTenantTimeouts>;
}
