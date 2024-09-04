// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class OrgWlantemplate extends pulumi.CustomResource {
    /**
     * Get an existing OrgWlantemplate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: OrgWlantemplateState, opts?: pulumi.CustomResourceOptions): OrgWlantemplate {
        return new OrgWlantemplate(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'mist:index/orgWlantemplate:OrgWlantemplate';

    /**
     * Returns true if the given object is an instance of OrgWlantemplate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is OrgWlantemplate {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === OrgWlantemplate.__pulumiType;
    }

    /**
     * where this template should be applied to, can be org_id, site_ids, sitegroup_ids
     */
    public readonly applies!: pulumi.Output<outputs.OrgWlantemplateApplies>;
    /**
     * list of Device Profile ids
     */
    public readonly deviceprofileIds!: pulumi.Output<string[]>;
    /**
     * where this template should not be applied to (takes precedence)
     */
    public readonly exceptions!: pulumi.Output<outputs.OrgWlantemplateExceptions>;
    /**
     * whether to further filter by Device Profile
     */
    public readonly filterByDeviceprofile!: pulumi.Output<boolean>;
    public readonly name!: pulumi.Output<string>;
    public readonly orgId!: pulumi.Output<string>;

    /**
     * Create a OrgWlantemplate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OrgWlantemplateArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: OrgWlantemplateArgs | OrgWlantemplateState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as OrgWlantemplateState | undefined;
            resourceInputs["applies"] = state ? state.applies : undefined;
            resourceInputs["deviceprofileIds"] = state ? state.deviceprofileIds : undefined;
            resourceInputs["exceptions"] = state ? state.exceptions : undefined;
            resourceInputs["filterByDeviceprofile"] = state ? state.filterByDeviceprofile : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["orgId"] = state ? state.orgId : undefined;
        } else {
            const args = argsOrState as OrgWlantemplateArgs | undefined;
            if ((!args || args.orgId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'orgId'");
            }
            resourceInputs["applies"] = args ? args.applies : undefined;
            resourceInputs["deviceprofileIds"] = args ? args.deviceprofileIds : undefined;
            resourceInputs["exceptions"] = args ? args.exceptions : undefined;
            resourceInputs["filterByDeviceprofile"] = args ? args.filterByDeviceprofile : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["orgId"] = args ? args.orgId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(OrgWlantemplate.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering OrgWlantemplate resources.
 */
export interface OrgWlantemplateState {
    /**
     * where this template should be applied to, can be org_id, site_ids, sitegroup_ids
     */
    applies?: pulumi.Input<inputs.OrgWlantemplateApplies>;
    /**
     * list of Device Profile ids
     */
    deviceprofileIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * where this template should not be applied to (takes precedence)
     */
    exceptions?: pulumi.Input<inputs.OrgWlantemplateExceptions>;
    /**
     * whether to further filter by Device Profile
     */
    filterByDeviceprofile?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    orgId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a OrgWlantemplate resource.
 */
export interface OrgWlantemplateArgs {
    /**
     * where this template should be applied to, can be org_id, site_ids, sitegroup_ids
     */
    applies?: pulumi.Input<inputs.OrgWlantemplateApplies>;
    /**
     * list of Device Profile ids
     */
    deviceprofileIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * where this template should not be applied to (takes precedence)
     */
    exceptions?: pulumi.Input<inputs.OrgWlantemplateExceptions>;
    /**
     * whether to further filter by Device Profile
     */
    filterByDeviceprofile?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    orgId: pulumi.Input<string>;
}
