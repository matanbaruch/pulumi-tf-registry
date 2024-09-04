// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class TenantToCloudAccount extends pulumi.CustomResource {
    /**
     * Get an existing TenantToCloudAccount resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TenantToCloudAccountState, opts?: pulumi.CustomResourceOptions): TenantToCloudAccount {
        return new TenantToCloudAccount(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aci:index/tenantToCloudAccount:TenantToCloudAccount';

    /**
     * Returns true if the given object is an instance of TenantToCloudAccount.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TenantToCloudAccount {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TenantToCloudAccount.__pulumiType;
    }

    public readonly annotation!: pulumi.Output<string>;
    public readonly cloudAccountDn!: pulumi.Output<string>;
    public readonly description!: pulumi.Output<string>;
    public readonly nameAlias!: pulumi.Output<string>;
    public readonly tenantDn!: pulumi.Output<string>;

    /**
     * Create a TenantToCloudAccount resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TenantToCloudAccountArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: TenantToCloudAccountArgs | TenantToCloudAccountState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as TenantToCloudAccountState | undefined;
            resourceInputs["annotation"] = state ? state.annotation : undefined;
            resourceInputs["cloudAccountDn"] = state ? state.cloudAccountDn : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["nameAlias"] = state ? state.nameAlias : undefined;
            resourceInputs["tenantDn"] = state ? state.tenantDn : undefined;
        } else {
            const args = argsOrState as TenantToCloudAccountArgs | undefined;
            if ((!args || args.cloudAccountDn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'cloudAccountDn'");
            }
            if ((!args || args.tenantDn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'tenantDn'");
            }
            resourceInputs["annotation"] = args ? args.annotation : undefined;
            resourceInputs["cloudAccountDn"] = args ? args.cloudAccountDn : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["nameAlias"] = args ? args.nameAlias : undefined;
            resourceInputs["tenantDn"] = args ? args.tenantDn : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(TenantToCloudAccount.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering TenantToCloudAccount resources.
 */
export interface TenantToCloudAccountState {
    annotation?: pulumi.Input<string>;
    cloudAccountDn?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    nameAlias?: pulumi.Input<string>;
    tenantDn?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a TenantToCloudAccount resource.
 */
export interface TenantToCloudAccountArgs {
    annotation?: pulumi.Input<string>;
    cloudAccountDn: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    nameAlias?: pulumi.Input<string>;
    tenantDn: pulumi.Input<string>;
}
