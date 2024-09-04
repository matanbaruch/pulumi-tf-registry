// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Template extends pulumi.CustomResource {
    /**
     * Get an existing Template resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TemplateState, opts?: pulumi.CustomResourceOptions): Template {
        return new Template(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'coderd:index/template:Template';

    /**
     * Returns true if the given object is an instance of Template.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Template {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Template.__pulumiType;
    }

    public readonly acl!: pulumi.Output<outputs.TemplateAcl | undefined>;
    /**
     * The activity bump duration for all workspaces created from this template, in milliseconds. Defaults to one hour.
     */
    public readonly activityBumpMs!: pulumi.Output<number>;
    /**
     * (Enterprise) Whether users can auto-start workspaces created from this template. Defaults to true.
     */
    public readonly allowUserAutoStart!: pulumi.Output<boolean>;
    /**
     * (Enterprise) Whether users can auto-start workspaces created from this template. Defaults to true.
     */
    public readonly allowUserAutoStop!: pulumi.Output<boolean>;
    /**
     * Whether users can cancel in-progress workspace jobs using this template. Defaults to true.
     */
    public readonly allowUserCancelWorkspaceJobs!: pulumi.Output<boolean>;
    /**
     * (Enterprise) List of days of the week in which autostart is allowed to happen, for all workspaces created from this
     * template. Defaults to all days. If no days are specified, autostart is not allowed.
     */
    public readonly autoStartPermittedDaysOfWeeks!: pulumi.Output<string[]>;
    /**
     * (Enterprise) The auto-stop requirement for all workspaces created from this template.
     */
    public readonly autoStopRequirement!: pulumi.Output<outputs.TemplateAutoStopRequirement>;
    /**
     * The default time-to-live for all workspaces created from this template, in milliseconds.
     */
    public readonly defaultTtlMs!: pulumi.Output<number>;
    /**
     * If set, the template will be marked as deprecated with the provided message and users will be blocked from creating new
     * workspaces from it. Does nothing if set when the resource is created.
     */
    public readonly deprecationMessage!: pulumi.Output<string>;
    /**
     * A description of the template.
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * The display name of the template. Defaults to the template name.
     */
    public readonly displayName!: pulumi.Output<string>;
    /**
     * (Enterprise) The max lifetime before Coder stops all resources for failed workspaces created from this template, in
     * milliseconds.
     */
    public readonly failureTtlMs!: pulumi.Output<number>;
    /**
     * Relative path or external URL that specifes an icon to be displayed in the dashboard.
     */
    public readonly icon!: pulumi.Output<string>;
    /**
     * The name of the template.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The ID of the organization. Defaults to the provider's default organization
     */
    public readonly organizationId!: pulumi.Output<string>;
    /**
     * (Enterprise) Whether workspaces must be created from the active version of this template. Defaults to false.
     */
    public readonly requireActiveVersion!: pulumi.Output<boolean>;
    /**
     * (Enterprise) The max lifetime before Coder permanently deletes dormant workspaces created from this template.
     */
    public readonly timeTilDormantAutodeleteMs!: pulumi.Output<number>;
    /**
     * (Enterprise) The max lifetime before Coder locks inactive workspaces created from this template, in milliseconds.
     */
    public readonly timeTilDormantMs!: pulumi.Output<number>;
    public readonly versions!: pulumi.Output<outputs.TemplateVersion[]>;

    /**
     * Create a Template resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TemplateArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: TemplateArgs | TemplateState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as TemplateState | undefined;
            resourceInputs["acl"] = state ? state.acl : undefined;
            resourceInputs["activityBumpMs"] = state ? state.activityBumpMs : undefined;
            resourceInputs["allowUserAutoStart"] = state ? state.allowUserAutoStart : undefined;
            resourceInputs["allowUserAutoStop"] = state ? state.allowUserAutoStop : undefined;
            resourceInputs["allowUserCancelWorkspaceJobs"] = state ? state.allowUserCancelWorkspaceJobs : undefined;
            resourceInputs["autoStartPermittedDaysOfWeeks"] = state ? state.autoStartPermittedDaysOfWeeks : undefined;
            resourceInputs["autoStopRequirement"] = state ? state.autoStopRequirement : undefined;
            resourceInputs["defaultTtlMs"] = state ? state.defaultTtlMs : undefined;
            resourceInputs["deprecationMessage"] = state ? state.deprecationMessage : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["failureTtlMs"] = state ? state.failureTtlMs : undefined;
            resourceInputs["icon"] = state ? state.icon : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["organizationId"] = state ? state.organizationId : undefined;
            resourceInputs["requireActiveVersion"] = state ? state.requireActiveVersion : undefined;
            resourceInputs["timeTilDormantAutodeleteMs"] = state ? state.timeTilDormantAutodeleteMs : undefined;
            resourceInputs["timeTilDormantMs"] = state ? state.timeTilDormantMs : undefined;
            resourceInputs["versions"] = state ? state.versions : undefined;
        } else {
            const args = argsOrState as TemplateArgs | undefined;
            if ((!args || args.versions === undefined) && !opts.urn) {
                throw new Error("Missing required property 'versions'");
            }
            resourceInputs["acl"] = args ? args.acl : undefined;
            resourceInputs["activityBumpMs"] = args ? args.activityBumpMs : undefined;
            resourceInputs["allowUserAutoStart"] = args ? args.allowUserAutoStart : undefined;
            resourceInputs["allowUserAutoStop"] = args ? args.allowUserAutoStop : undefined;
            resourceInputs["allowUserCancelWorkspaceJobs"] = args ? args.allowUserCancelWorkspaceJobs : undefined;
            resourceInputs["autoStartPermittedDaysOfWeeks"] = args ? args.autoStartPermittedDaysOfWeeks : undefined;
            resourceInputs["autoStopRequirement"] = args ? args.autoStopRequirement : undefined;
            resourceInputs["defaultTtlMs"] = args ? args.defaultTtlMs : undefined;
            resourceInputs["deprecationMessage"] = args ? args.deprecationMessage : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["failureTtlMs"] = args ? args.failureTtlMs : undefined;
            resourceInputs["icon"] = args ? args.icon : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["organizationId"] = args ? args.organizationId : undefined;
            resourceInputs["requireActiveVersion"] = args ? args.requireActiveVersion : undefined;
            resourceInputs["timeTilDormantAutodeleteMs"] = args ? args.timeTilDormantAutodeleteMs : undefined;
            resourceInputs["timeTilDormantMs"] = args ? args.timeTilDormantMs : undefined;
            resourceInputs["versions"] = args ? args.versions : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Template.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Template resources.
 */
export interface TemplateState {
    acl?: pulumi.Input<inputs.TemplateAcl>;
    /**
     * The activity bump duration for all workspaces created from this template, in milliseconds. Defaults to one hour.
     */
    activityBumpMs?: pulumi.Input<number>;
    /**
     * (Enterprise) Whether users can auto-start workspaces created from this template. Defaults to true.
     */
    allowUserAutoStart?: pulumi.Input<boolean>;
    /**
     * (Enterprise) Whether users can auto-start workspaces created from this template. Defaults to true.
     */
    allowUserAutoStop?: pulumi.Input<boolean>;
    /**
     * Whether users can cancel in-progress workspace jobs using this template. Defaults to true.
     */
    allowUserCancelWorkspaceJobs?: pulumi.Input<boolean>;
    /**
     * (Enterprise) List of days of the week in which autostart is allowed to happen, for all workspaces created from this
     * template. Defaults to all days. If no days are specified, autostart is not allowed.
     */
    autoStartPermittedDaysOfWeeks?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * (Enterprise) The auto-stop requirement for all workspaces created from this template.
     */
    autoStopRequirement?: pulumi.Input<inputs.TemplateAutoStopRequirement>;
    /**
     * The default time-to-live for all workspaces created from this template, in milliseconds.
     */
    defaultTtlMs?: pulumi.Input<number>;
    /**
     * If set, the template will be marked as deprecated with the provided message and users will be blocked from creating new
     * workspaces from it. Does nothing if set when the resource is created.
     */
    deprecationMessage?: pulumi.Input<string>;
    /**
     * A description of the template.
     */
    description?: pulumi.Input<string>;
    /**
     * The display name of the template. Defaults to the template name.
     */
    displayName?: pulumi.Input<string>;
    /**
     * (Enterprise) The max lifetime before Coder stops all resources for failed workspaces created from this template, in
     * milliseconds.
     */
    failureTtlMs?: pulumi.Input<number>;
    /**
     * Relative path or external URL that specifes an icon to be displayed in the dashboard.
     */
    icon?: pulumi.Input<string>;
    /**
     * The name of the template.
     */
    name?: pulumi.Input<string>;
    /**
     * The ID of the organization. Defaults to the provider's default organization
     */
    organizationId?: pulumi.Input<string>;
    /**
     * (Enterprise) Whether workspaces must be created from the active version of this template. Defaults to false.
     */
    requireActiveVersion?: pulumi.Input<boolean>;
    /**
     * (Enterprise) The max lifetime before Coder permanently deletes dormant workspaces created from this template.
     */
    timeTilDormantAutodeleteMs?: pulumi.Input<number>;
    /**
     * (Enterprise) The max lifetime before Coder locks inactive workspaces created from this template, in milliseconds.
     */
    timeTilDormantMs?: pulumi.Input<number>;
    versions?: pulumi.Input<pulumi.Input<inputs.TemplateVersion>[]>;
}

/**
 * The set of arguments for constructing a Template resource.
 */
export interface TemplateArgs {
    acl?: pulumi.Input<inputs.TemplateAcl>;
    /**
     * The activity bump duration for all workspaces created from this template, in milliseconds. Defaults to one hour.
     */
    activityBumpMs?: pulumi.Input<number>;
    /**
     * (Enterprise) Whether users can auto-start workspaces created from this template. Defaults to true.
     */
    allowUserAutoStart?: pulumi.Input<boolean>;
    /**
     * (Enterprise) Whether users can auto-start workspaces created from this template. Defaults to true.
     */
    allowUserAutoStop?: pulumi.Input<boolean>;
    /**
     * Whether users can cancel in-progress workspace jobs using this template. Defaults to true.
     */
    allowUserCancelWorkspaceJobs?: pulumi.Input<boolean>;
    /**
     * (Enterprise) List of days of the week in which autostart is allowed to happen, for all workspaces created from this
     * template. Defaults to all days. If no days are specified, autostart is not allowed.
     */
    autoStartPermittedDaysOfWeeks?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * (Enterprise) The auto-stop requirement for all workspaces created from this template.
     */
    autoStopRequirement?: pulumi.Input<inputs.TemplateAutoStopRequirement>;
    /**
     * The default time-to-live for all workspaces created from this template, in milliseconds.
     */
    defaultTtlMs?: pulumi.Input<number>;
    /**
     * If set, the template will be marked as deprecated with the provided message and users will be blocked from creating new
     * workspaces from it. Does nothing if set when the resource is created.
     */
    deprecationMessage?: pulumi.Input<string>;
    /**
     * A description of the template.
     */
    description?: pulumi.Input<string>;
    /**
     * The display name of the template. Defaults to the template name.
     */
    displayName?: pulumi.Input<string>;
    /**
     * (Enterprise) The max lifetime before Coder stops all resources for failed workspaces created from this template, in
     * milliseconds.
     */
    failureTtlMs?: pulumi.Input<number>;
    /**
     * Relative path or external URL that specifes an icon to be displayed in the dashboard.
     */
    icon?: pulumi.Input<string>;
    /**
     * The name of the template.
     */
    name?: pulumi.Input<string>;
    /**
     * The ID of the organization. Defaults to the provider's default organization
     */
    organizationId?: pulumi.Input<string>;
    /**
     * (Enterprise) Whether workspaces must be created from the active version of this template. Defaults to false.
     */
    requireActiveVersion?: pulumi.Input<boolean>;
    /**
     * (Enterprise) The max lifetime before Coder permanently deletes dormant workspaces created from this template.
     */
    timeTilDormantAutodeleteMs?: pulumi.Input<number>;
    /**
     * (Enterprise) The max lifetime before Coder locks inactive workspaces created from this template, in milliseconds.
     */
    timeTilDormantMs?: pulumi.Input<number>;
    versions: pulumi.Input<pulumi.Input<inputs.TemplateVersion>[]>;
}
