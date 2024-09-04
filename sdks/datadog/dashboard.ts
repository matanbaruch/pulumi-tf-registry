// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Dashboard extends pulumi.CustomResource {
    /**
     * Get an existing Dashboard resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DashboardState, opts?: pulumi.CustomResourceOptions): Dashboard {
        return new Dashboard(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'datadog:index/dashboard:Dashboard';

    /**
     * Returns true if the given object is an instance of Dashboard.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Dashboard {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Dashboard.__pulumiType;
    }

    public readonly dashboardLists!: pulumi.Output<number[] | undefined>;
    /**
     * A list of dashboard lists this dashboard should be removed from. Internal only.
     */
    public /*out*/ readonly dashboardListsRemoveds!: pulumi.Output<number[]>;
    /**
     * The description of the dashboard.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Whether this dashboard is read-only. **Deprecated.** Prefer using `restricted_roles` to define which roles are required
     * to edit the dashboard. Defaults to `false`.
     *
     * @deprecated Deprecated
     */
    public readonly isReadOnly!: pulumi.Output<boolean | undefined>;
    /**
     * The layout type of the dashboard. Valid values are `ordered`, `free`.
     */
    public readonly layoutType!: pulumi.Output<string>;
    /**
     * The list of handles for the users to notify when changes are made to this dashboard.
     */
    public readonly notifyLists!: pulumi.Output<string[] | undefined>;
    /**
     * The reflow type of a new dashboard layout. Set this only when layout type is `ordered`. If set to `fixed`, the dashboard
     * expects all widgets to have a layout, and if it's set to `auto`, widgets should not have layouts. Valid values are
     * `auto`, `fixed`.
     */
    public readonly reflowType!: pulumi.Output<string | undefined>;
    /**
     * UUIDs of roles whose associated users are authorized to edit the dashboard.
     */
    public readonly restrictedRoles!: pulumi.Output<string[] | undefined>;
    /**
     * A list of tags assigned to the Dashboard. Only team names of the form `team:<name>` are supported.
     */
    public readonly tags!: pulumi.Output<string[] | undefined>;
    /**
     * The list of selectable template variable presets for this dashboard.
     */
    public readonly templateVariablePresets!: pulumi.Output<outputs.DashboardTemplateVariablePreset[] | undefined>;
    /**
     * The list of template variables for this dashboard.
     */
    public readonly templateVariables!: pulumi.Output<outputs.DashboardTemplateVariable[] | undefined>;
    /**
     * The title of the dashboard.
     */
    public readonly title!: pulumi.Output<string>;
    /**
     * The URL of the dashboard.
     */
    public readonly url!: pulumi.Output<string>;
    /**
     * The list of widgets to display on the dashboard.
     */
    public readonly widgets!: pulumi.Output<outputs.DashboardWidget[] | undefined>;

    /**
     * Create a Dashboard resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DashboardArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DashboardArgs | DashboardState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DashboardState | undefined;
            resourceInputs["dashboardLists"] = state ? state.dashboardLists : undefined;
            resourceInputs["dashboardListsRemoveds"] = state ? state.dashboardListsRemoveds : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["isReadOnly"] = state ? state.isReadOnly : undefined;
            resourceInputs["layoutType"] = state ? state.layoutType : undefined;
            resourceInputs["notifyLists"] = state ? state.notifyLists : undefined;
            resourceInputs["reflowType"] = state ? state.reflowType : undefined;
            resourceInputs["restrictedRoles"] = state ? state.restrictedRoles : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["templateVariablePresets"] = state ? state.templateVariablePresets : undefined;
            resourceInputs["templateVariables"] = state ? state.templateVariables : undefined;
            resourceInputs["title"] = state ? state.title : undefined;
            resourceInputs["url"] = state ? state.url : undefined;
            resourceInputs["widgets"] = state ? state.widgets : undefined;
        } else {
            const args = argsOrState as DashboardArgs | undefined;
            if ((!args || args.layoutType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'layoutType'");
            }
            if ((!args || args.title === undefined) && !opts.urn) {
                throw new Error("Missing required property 'title'");
            }
            resourceInputs["dashboardLists"] = args ? args.dashboardLists : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["isReadOnly"] = args ? args.isReadOnly : undefined;
            resourceInputs["layoutType"] = args ? args.layoutType : undefined;
            resourceInputs["notifyLists"] = args ? args.notifyLists : undefined;
            resourceInputs["reflowType"] = args ? args.reflowType : undefined;
            resourceInputs["restrictedRoles"] = args ? args.restrictedRoles : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["templateVariablePresets"] = args ? args.templateVariablePresets : undefined;
            resourceInputs["templateVariables"] = args ? args.templateVariables : undefined;
            resourceInputs["title"] = args ? args.title : undefined;
            resourceInputs["url"] = args ? args.url : undefined;
            resourceInputs["widgets"] = args ? args.widgets : undefined;
            resourceInputs["dashboardListsRemoveds"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Dashboard.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Dashboard resources.
 */
export interface DashboardState {
    dashboardLists?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * A list of dashboard lists this dashboard should be removed from. Internal only.
     */
    dashboardListsRemoveds?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * The description of the dashboard.
     */
    description?: pulumi.Input<string>;
    /**
     * Whether this dashboard is read-only. **Deprecated.** Prefer using `restricted_roles` to define which roles are required
     * to edit the dashboard. Defaults to `false`.
     *
     * @deprecated Deprecated
     */
    isReadOnly?: pulumi.Input<boolean>;
    /**
     * The layout type of the dashboard. Valid values are `ordered`, `free`.
     */
    layoutType?: pulumi.Input<string>;
    /**
     * The list of handles for the users to notify when changes are made to this dashboard.
     */
    notifyLists?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The reflow type of a new dashboard layout. Set this only when layout type is `ordered`. If set to `fixed`, the dashboard
     * expects all widgets to have a layout, and if it's set to `auto`, widgets should not have layouts. Valid values are
     * `auto`, `fixed`.
     */
    reflowType?: pulumi.Input<string>;
    /**
     * UUIDs of roles whose associated users are authorized to edit the dashboard.
     */
    restrictedRoles?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A list of tags assigned to the Dashboard. Only team names of the form `team:<name>` are supported.
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The list of selectable template variable presets for this dashboard.
     */
    templateVariablePresets?: pulumi.Input<pulumi.Input<inputs.DashboardTemplateVariablePreset>[]>;
    /**
     * The list of template variables for this dashboard.
     */
    templateVariables?: pulumi.Input<pulumi.Input<inputs.DashboardTemplateVariable>[]>;
    /**
     * The title of the dashboard.
     */
    title?: pulumi.Input<string>;
    /**
     * The URL of the dashboard.
     */
    url?: pulumi.Input<string>;
    /**
     * The list of widgets to display on the dashboard.
     */
    widgets?: pulumi.Input<pulumi.Input<inputs.DashboardWidget>[]>;
}

/**
 * The set of arguments for constructing a Dashboard resource.
 */
export interface DashboardArgs {
    dashboardLists?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * The description of the dashboard.
     */
    description?: pulumi.Input<string>;
    /**
     * Whether this dashboard is read-only. **Deprecated.** Prefer using `restricted_roles` to define which roles are required
     * to edit the dashboard. Defaults to `false`.
     *
     * @deprecated Deprecated
     */
    isReadOnly?: pulumi.Input<boolean>;
    /**
     * The layout type of the dashboard. Valid values are `ordered`, `free`.
     */
    layoutType: pulumi.Input<string>;
    /**
     * The list of handles for the users to notify when changes are made to this dashboard.
     */
    notifyLists?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The reflow type of a new dashboard layout. Set this only when layout type is `ordered`. If set to `fixed`, the dashboard
     * expects all widgets to have a layout, and if it's set to `auto`, widgets should not have layouts. Valid values are
     * `auto`, `fixed`.
     */
    reflowType?: pulumi.Input<string>;
    /**
     * UUIDs of roles whose associated users are authorized to edit the dashboard.
     */
    restrictedRoles?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A list of tags assigned to the Dashboard. Only team names of the form `team:<name>` are supported.
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The list of selectable template variable presets for this dashboard.
     */
    templateVariablePresets?: pulumi.Input<pulumi.Input<inputs.DashboardTemplateVariablePreset>[]>;
    /**
     * The list of template variables for this dashboard.
     */
    templateVariables?: pulumi.Input<pulumi.Input<inputs.DashboardTemplateVariable>[]>;
    /**
     * The title of the dashboard.
     */
    title: pulumi.Input<string>;
    /**
     * The URL of the dashboard.
     */
    url?: pulumi.Input<string>;
    /**
     * The list of widgets to display on the dashboard.
     */
    widgets?: pulumi.Input<pulumi.Input<inputs.DashboardWidget>[]>;
}
