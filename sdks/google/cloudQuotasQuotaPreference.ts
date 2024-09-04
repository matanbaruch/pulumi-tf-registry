// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class CloudQuotasQuotaPreference extends pulumi.CustomResource {
    /**
     * Get an existing CloudQuotasQuotaPreference resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CloudQuotasQuotaPreferenceState, opts?: pulumi.CustomResourceOptions): CloudQuotasQuotaPreference {
        return new CloudQuotasQuotaPreference(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google:index/cloudQuotasQuotaPreference:CloudQuotasQuotaPreference';

    /**
     * Returns true if the given object is an instance of CloudQuotasQuotaPreference.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CloudQuotasQuotaPreference {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CloudQuotasQuotaPreference.__pulumiType;
    }

    /**
     * An email address that can be used for quota related communication between the Google Cloud and the user in case the
     * Google Cloud needs further information to make a decision on whether the user preferred quota can be granted. The Google
     * account for the email address must have quota update permission for the project, folder or organization this quota
     * preference is for.
     */
    public readonly contactEmail!: pulumi.Output<string | undefined>;
    /**
     * Create time stamp. A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional
     * digits. Examples: '2014-10-02T15:01:23Z' and '2014-10-02T15:01:23.045123456Z'.
     */
    public /*out*/ readonly createTime!: pulumi.Output<string>;
    /**
     * The dimensions that this quota preference applies to. The key of the map entry is the name of a dimension, such as
     * "region", "zone", "network_id", and the value of the map entry is the dimension value. If a dimension is missing from
     * the map of dimensions, the quota preference applies to all the dimension values except for those that have other quota
     * preferences configured for the specific value. NOTE: QuotaPreferences can only be applied across all values of "user"
     * and "resource" dimension. Do not set values for "user" or "resource" in the dimension map. Example: '{"provider": "Foo
     * Inc"}' where "provider" is a service specific dimension.
     */
    public readonly dimensions!: pulumi.Output<{[key: string]: string}>;
    /**
     * The current etag of the quota preference. If an etag is provided on update and does not match the current server's etag
     * of the quota preference, the request will be blocked and an ABORTED error will be returned. See
     * https://google.aip.dev/134#etags for more details on etags.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The list of quota safety checks to be ignored. Default value: "QUOTA_SAFETY_CHECK_UNSPECIFIED" Possible values:
     * ["QUOTA_SAFETY_CHECK_UNSPECIFIED", "QUOTA_DECREASE_BELOW_USAGE", "QUOTA_DECREASE_PERCENTAGE_TOO_HIGH"]
     */
    public readonly ignoreSafetyChecks!: pulumi.Output<string | undefined>;
    /**
     * The reason / justification for this quota preference.
     */
    public readonly justification!: pulumi.Output<string | undefined>;
    /**
     * The resource name of the quota preference. Required except in the CREATE requests.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The parent of the quota preference. Allowed parents are "projects/[project-id / number]" or "folders/[folder-id /
     * number]" or "organizations/[org-id / number]".
     */
    public readonly parent!: pulumi.Output<string>;
    /**
     * The preferred quota configuration.
     */
    public readonly quotaConfig!: pulumi.Output<outputs.CloudQuotasQuotaPreferenceQuotaConfig>;
    /**
     * The id of the quota to which the quota preference is applied. A quota id is unique in the service. Example:
     * 'CPUS-per-project-region'.
     */
    public readonly quotaId!: pulumi.Output<string>;
    /**
     * Is the quota preference pending Google Cloud approval and fulfillment.
     */
    public /*out*/ readonly reconciling!: pulumi.Output<boolean>;
    /**
     * The name of the service to which the quota preference is applied.
     */
    public readonly service!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.CloudQuotasQuotaPreferenceTimeouts | undefined>;
    /**
     * Update time stamp. A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional
     * digits. Examples: '2014-10-02T15:01:23Z' and '2014-10-02T15:01:23.045123456Z'.
     */
    public /*out*/ readonly updateTime!: pulumi.Output<string>;

    /**
     * Create a CloudQuotasQuotaPreference resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CloudQuotasQuotaPreferenceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CloudQuotasQuotaPreferenceArgs | CloudQuotasQuotaPreferenceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CloudQuotasQuotaPreferenceState | undefined;
            resourceInputs["contactEmail"] = state ? state.contactEmail : undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["dimensions"] = state ? state.dimensions : undefined;
            resourceInputs["etag"] = state ? state.etag : undefined;
            resourceInputs["ignoreSafetyChecks"] = state ? state.ignoreSafetyChecks : undefined;
            resourceInputs["justification"] = state ? state.justification : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["parent"] = state ? state.parent : undefined;
            resourceInputs["quotaConfig"] = state ? state.quotaConfig : undefined;
            resourceInputs["quotaId"] = state ? state.quotaId : undefined;
            resourceInputs["reconciling"] = state ? state.reconciling : undefined;
            resourceInputs["service"] = state ? state.service : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["updateTime"] = state ? state.updateTime : undefined;
        } else {
            const args = argsOrState as CloudQuotasQuotaPreferenceArgs | undefined;
            if ((!args || args.quotaConfig === undefined) && !opts.urn) {
                throw new Error("Missing required property 'quotaConfig'");
            }
            resourceInputs["contactEmail"] = args ? args.contactEmail : undefined;
            resourceInputs["dimensions"] = args ? args.dimensions : undefined;
            resourceInputs["ignoreSafetyChecks"] = args ? args.ignoreSafetyChecks : undefined;
            resourceInputs["justification"] = args ? args.justification : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["parent"] = args ? args.parent : undefined;
            resourceInputs["quotaConfig"] = args ? args.quotaConfig : undefined;
            resourceInputs["quotaId"] = args ? args.quotaId : undefined;
            resourceInputs["service"] = args ? args.service : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["createTime"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["reconciling"] = undefined /*out*/;
            resourceInputs["updateTime"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CloudQuotasQuotaPreference.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CloudQuotasQuotaPreference resources.
 */
export interface CloudQuotasQuotaPreferenceState {
    /**
     * An email address that can be used for quota related communication between the Google Cloud and the user in case the
     * Google Cloud needs further information to make a decision on whether the user preferred quota can be granted. The Google
     * account for the email address must have quota update permission for the project, folder or organization this quota
     * preference is for.
     */
    contactEmail?: pulumi.Input<string>;
    /**
     * Create time stamp. A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional
     * digits. Examples: '2014-10-02T15:01:23Z' and '2014-10-02T15:01:23.045123456Z'.
     */
    createTime?: pulumi.Input<string>;
    /**
     * The dimensions that this quota preference applies to. The key of the map entry is the name of a dimension, such as
     * "region", "zone", "network_id", and the value of the map entry is the dimension value. If a dimension is missing from
     * the map of dimensions, the quota preference applies to all the dimension values except for those that have other quota
     * preferences configured for the specific value. NOTE: QuotaPreferences can only be applied across all values of "user"
     * and "resource" dimension. Do not set values for "user" or "resource" in the dimension map. Example: '{"provider": "Foo
     * Inc"}' where "provider" is a service specific dimension.
     */
    dimensions?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The current etag of the quota preference. If an etag is provided on update and does not match the current server's etag
     * of the quota preference, the request will be blocked and an ABORTED error will be returned. See
     * https://google.aip.dev/134#etags for more details on etags.
     */
    etag?: pulumi.Input<string>;
    /**
     * The list of quota safety checks to be ignored. Default value: "QUOTA_SAFETY_CHECK_UNSPECIFIED" Possible values:
     * ["QUOTA_SAFETY_CHECK_UNSPECIFIED", "QUOTA_DECREASE_BELOW_USAGE", "QUOTA_DECREASE_PERCENTAGE_TOO_HIGH"]
     */
    ignoreSafetyChecks?: pulumi.Input<string>;
    /**
     * The reason / justification for this quota preference.
     */
    justification?: pulumi.Input<string>;
    /**
     * The resource name of the quota preference. Required except in the CREATE requests.
     */
    name?: pulumi.Input<string>;
    /**
     * The parent of the quota preference. Allowed parents are "projects/[project-id / number]" or "folders/[folder-id /
     * number]" or "organizations/[org-id / number]".
     */
    parent?: pulumi.Input<string>;
    /**
     * The preferred quota configuration.
     */
    quotaConfig?: pulumi.Input<inputs.CloudQuotasQuotaPreferenceQuotaConfig>;
    /**
     * The id of the quota to which the quota preference is applied. A quota id is unique in the service. Example:
     * 'CPUS-per-project-region'.
     */
    quotaId?: pulumi.Input<string>;
    /**
     * Is the quota preference pending Google Cloud approval and fulfillment.
     */
    reconciling?: pulumi.Input<boolean>;
    /**
     * The name of the service to which the quota preference is applied.
     */
    service?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.CloudQuotasQuotaPreferenceTimeouts>;
    /**
     * Update time stamp. A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional
     * digits. Examples: '2014-10-02T15:01:23Z' and '2014-10-02T15:01:23.045123456Z'.
     */
    updateTime?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a CloudQuotasQuotaPreference resource.
 */
export interface CloudQuotasQuotaPreferenceArgs {
    /**
     * An email address that can be used for quota related communication between the Google Cloud and the user in case the
     * Google Cloud needs further information to make a decision on whether the user preferred quota can be granted. The Google
     * account for the email address must have quota update permission for the project, folder or organization this quota
     * preference is for.
     */
    contactEmail?: pulumi.Input<string>;
    /**
     * The dimensions that this quota preference applies to. The key of the map entry is the name of a dimension, such as
     * "region", "zone", "network_id", and the value of the map entry is the dimension value. If a dimension is missing from
     * the map of dimensions, the quota preference applies to all the dimension values except for those that have other quota
     * preferences configured for the specific value. NOTE: QuotaPreferences can only be applied across all values of "user"
     * and "resource" dimension. Do not set values for "user" or "resource" in the dimension map. Example: '{"provider": "Foo
     * Inc"}' where "provider" is a service specific dimension.
     */
    dimensions?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The list of quota safety checks to be ignored. Default value: "QUOTA_SAFETY_CHECK_UNSPECIFIED" Possible values:
     * ["QUOTA_SAFETY_CHECK_UNSPECIFIED", "QUOTA_DECREASE_BELOW_USAGE", "QUOTA_DECREASE_PERCENTAGE_TOO_HIGH"]
     */
    ignoreSafetyChecks?: pulumi.Input<string>;
    /**
     * The reason / justification for this quota preference.
     */
    justification?: pulumi.Input<string>;
    /**
     * The resource name of the quota preference. Required except in the CREATE requests.
     */
    name?: pulumi.Input<string>;
    /**
     * The parent of the quota preference. Allowed parents are "projects/[project-id / number]" or "folders/[folder-id /
     * number]" or "organizations/[org-id / number]".
     */
    parent?: pulumi.Input<string>;
    /**
     * The preferred quota configuration.
     */
    quotaConfig: pulumi.Input<inputs.CloudQuotasQuotaPreferenceQuotaConfig>;
    /**
     * The id of the quota to which the quota preference is applied. A quota id is unique in the service. Example:
     * 'CPUS-per-project-region'.
     */
    quotaId?: pulumi.Input<string>;
    /**
     * The name of the service to which the quota preference is applied.
     */
    service?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.CloudQuotasQuotaPreferenceTimeouts>;
}
