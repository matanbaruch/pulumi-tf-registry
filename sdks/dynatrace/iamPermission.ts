// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class IamPermission extends pulumi.CustomResource {
    /**
     * Get an existing IamPermission resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IamPermissionState, opts?: pulumi.CustomResourceOptions): IamPermission {
        return new IamPermission(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'dynatrace:index/iamPermission:IamPermission';

    /**
     * Returns true if the given object is an instance of IamPermission.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IamPermission {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IamPermission.__pulumiType;
    }

    /**
     * The UUID of the account this permission is valid for
     */
    public readonly account!: pulumi.Output<string | undefined>;
    /**
     * The environment this permission is valid (`https://<environmentid>.live.dynatrace.com`). Also required in when trying to
     * specify a management zone permission.
     */
    public readonly environment!: pulumi.Output<string | undefined>;
    /**
     * The ID of the group this permission is valid for
     */
    public readonly group!: pulumi.Output<string>;
    /**
     * The management zone this permission is valid for. You need to use the attribute `legacy_id` when referring to a resource
     * `dynatrace.ManagementZoneV2` or a data source `dynatrace.ManagementZone`. The attribute `environment` is required to get
     * specified also in order to identify the management zone uniquely.
     */
    public readonly managementZone!: pulumi.Output<string | undefined>;
    /**
     * Possible values: `account-company-info`, `account-user-management`, `account-viewer`,
     * `account-saml-flexible-federation`, `tenant-viewer`, `tenant-manage-settings`, `tenant-agent-install`,
     * `tenant-logviewer`, `tenant-view-sensitive-request-data`, `tenant-configure-request-capture-data`,
     * `tenant-replay-sessions-with-masking`, `tenant-replay-sessions-without-masking`, `tenant-manage-security-problems`,
     * `tenant-view-security-problems`, `tenant-manage-support-tickets`
     */
    public readonly name!: pulumi.Output<string>;

    /**
     * Create a IamPermission resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IamPermissionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IamPermissionArgs | IamPermissionState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IamPermissionState | undefined;
            resourceInputs["account"] = state ? state.account : undefined;
            resourceInputs["environment"] = state ? state.environment : undefined;
            resourceInputs["group"] = state ? state.group : undefined;
            resourceInputs["managementZone"] = state ? state.managementZone : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
        } else {
            const args = argsOrState as IamPermissionArgs | undefined;
            if ((!args || args.group === undefined) && !opts.urn) {
                throw new Error("Missing required property 'group'");
            }
            resourceInputs["account"] = args ? args.account : undefined;
            resourceInputs["environment"] = args ? args.environment : undefined;
            resourceInputs["group"] = args ? args.group : undefined;
            resourceInputs["managementZone"] = args ? args.managementZone : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IamPermission.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering IamPermission resources.
 */
export interface IamPermissionState {
    /**
     * The UUID of the account this permission is valid for
     */
    account?: pulumi.Input<string>;
    /**
     * The environment this permission is valid (`https://<environmentid>.live.dynatrace.com`). Also required in when trying to
     * specify a management zone permission.
     */
    environment?: pulumi.Input<string>;
    /**
     * The ID of the group this permission is valid for
     */
    group?: pulumi.Input<string>;
    /**
     * The management zone this permission is valid for. You need to use the attribute `legacy_id` when referring to a resource
     * `dynatrace.ManagementZoneV2` or a data source `dynatrace.ManagementZone`. The attribute `environment` is required to get
     * specified also in order to identify the management zone uniquely.
     */
    managementZone?: pulumi.Input<string>;
    /**
     * Possible values: `account-company-info`, `account-user-management`, `account-viewer`,
     * `account-saml-flexible-federation`, `tenant-viewer`, `tenant-manage-settings`, `tenant-agent-install`,
     * `tenant-logviewer`, `tenant-view-sensitive-request-data`, `tenant-configure-request-capture-data`,
     * `tenant-replay-sessions-with-masking`, `tenant-replay-sessions-without-masking`, `tenant-manage-security-problems`,
     * `tenant-view-security-problems`, `tenant-manage-support-tickets`
     */
    name?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a IamPermission resource.
 */
export interface IamPermissionArgs {
    /**
     * The UUID of the account this permission is valid for
     */
    account?: pulumi.Input<string>;
    /**
     * The environment this permission is valid (`https://<environmentid>.live.dynatrace.com`). Also required in when trying to
     * specify a management zone permission.
     */
    environment?: pulumi.Input<string>;
    /**
     * The ID of the group this permission is valid for
     */
    group: pulumi.Input<string>;
    /**
     * The management zone this permission is valid for. You need to use the attribute `legacy_id` when referring to a resource
     * `dynatrace.ManagementZoneV2` or a data source `dynatrace.ManagementZone`. The attribute `environment` is required to get
     * specified also in order to identify the management zone uniquely.
     */
    managementZone?: pulumi.Input<string>;
    /**
     * Possible values: `account-company-info`, `account-user-management`, `account-viewer`,
     * `account-saml-flexible-federation`, `tenant-viewer`, `tenant-manage-settings`, `tenant-agent-install`,
     * `tenant-logviewer`, `tenant-view-sensitive-request-data`, `tenant-configure-request-capture-data`,
     * `tenant-replay-sessions-with-masking`, `tenant-replay-sessions-without-masking`, `tenant-manage-security-problems`,
     * `tenant-view-security-problems`, `tenant-manage-support-tickets`
     */
    name?: pulumi.Input<string>;
}
