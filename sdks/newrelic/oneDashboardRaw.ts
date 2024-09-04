// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class OneDashboardRaw extends pulumi.CustomResource {
    /**
     * Get an existing OneDashboardRaw resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: OneDashboardRawState, opts?: pulumi.CustomResourceOptions): OneDashboardRaw {
        return new OneDashboardRaw(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'newrelic:index/oneDashboardRaw:OneDashboardRaw';

    /**
     * Returns true if the given object is an instance of OneDashboardRaw.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is OneDashboardRaw {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === OneDashboardRaw.__pulumiType;
    }

    /**
     * The New Relic account ID where you want to create the dashboard.
     */
    public readonly accountId!: pulumi.Output<number>;
    /**
     * The dashboard's description.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The unique entity identifier of the dashboard in New Relic.
     */
    public /*out*/ readonly guid!: pulumi.Output<string>;
    /**
     * The dashboard's name.
     */
    public readonly name!: pulumi.Output<string>;
    public readonly pages!: pulumi.Output<outputs.OneDashboardRawPage[]>;
    /**
     * The URL of the dashboard.
     */
    public /*out*/ readonly permalink!: pulumi.Output<string>;
    /**
     * Determines who can see or edit the dashboard. Valid values are private, public_read_only, public_read_write. Defaults to
     * public_read_only.
     */
    public readonly permissions!: pulumi.Output<string | undefined>;

    /**
     * Create a OneDashboardRaw resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OneDashboardRawArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: OneDashboardRawArgs | OneDashboardRawState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as OneDashboardRawState | undefined;
            resourceInputs["accountId"] = state ? state.accountId : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["guid"] = state ? state.guid : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["pages"] = state ? state.pages : undefined;
            resourceInputs["permalink"] = state ? state.permalink : undefined;
            resourceInputs["permissions"] = state ? state.permissions : undefined;
        } else {
            const args = argsOrState as OneDashboardRawArgs | undefined;
            if ((!args || args.pages === undefined) && !opts.urn) {
                throw new Error("Missing required property 'pages'");
            }
            resourceInputs["accountId"] = args ? args.accountId : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["pages"] = args ? args.pages : undefined;
            resourceInputs["permissions"] = args ? args.permissions : undefined;
            resourceInputs["guid"] = undefined /*out*/;
            resourceInputs["permalink"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(OneDashboardRaw.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering OneDashboardRaw resources.
 */
export interface OneDashboardRawState {
    /**
     * The New Relic account ID where you want to create the dashboard.
     */
    accountId?: pulumi.Input<number>;
    /**
     * The dashboard's description.
     */
    description?: pulumi.Input<string>;
    /**
     * The unique entity identifier of the dashboard in New Relic.
     */
    guid?: pulumi.Input<string>;
    /**
     * The dashboard's name.
     */
    name?: pulumi.Input<string>;
    pages?: pulumi.Input<pulumi.Input<inputs.OneDashboardRawPage>[]>;
    /**
     * The URL of the dashboard.
     */
    permalink?: pulumi.Input<string>;
    /**
     * Determines who can see or edit the dashboard. Valid values are private, public_read_only, public_read_write. Defaults to
     * public_read_only.
     */
    permissions?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a OneDashboardRaw resource.
 */
export interface OneDashboardRawArgs {
    /**
     * The New Relic account ID where you want to create the dashboard.
     */
    accountId?: pulumi.Input<number>;
    /**
     * The dashboard's description.
     */
    description?: pulumi.Input<string>;
    /**
     * The dashboard's name.
     */
    name?: pulumi.Input<string>;
    pages: pulumi.Input<pulumi.Input<inputs.OneDashboardRawPage>[]>;
    /**
     * Determines who can see or edit the dashboard. Valid values are private, public_read_only, public_read_write. Defaults to
     * public_read_only.
     */
    permissions?: pulumi.Input<string>;
}
