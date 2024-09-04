// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Notebook extends pulumi.CustomResource {
    /**
     * Get an existing Notebook resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NotebookState, opts?: pulumi.CustomResourceOptions): Notebook {
        return new Notebook(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'shoreline:index/notebook:Notebook';

    /**
     * Returns true if the given object is an instance of Notebook.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Notebook {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Notebook.__pulumiType;
    }

    /**
     * The list of users who can run an action or notebook. Any user can run if left empty.
     */
    public readonly allowedEntities!: pulumi.Output<string[] | undefined>;
    /**
     * The list of resources on which an action or notebook can run. No restriction, if left empty.
     */
    public readonly allowedResourcesQuery!: pulumi.Output<string | undefined>;
    public readonly approvers!: pulumi.Output<string[] | undefined>;
    /**
     * Enables slack notifications for approvals operations. (Requires workspace and channel.) Defaults to `true`.
     */
    public readonly communicationApprovalNotifications!: pulumi.Output<boolean | undefined>;
    /**
     * A string value denoting the slack channel where notifications related to the object should be sent to.
     */
    public readonly communicationChannel!: pulumi.Output<string | undefined>;
    /**
     * Enables slack notifications for create/update/delete operations. (Requires workspace and channel.) Defaults to `true`.
     */
    public readonly communicationCudNotifications!: pulumi.Output<boolean | undefined>;
    /**
     * Enables slack notifications for the object executions. (Requires workspace and channel.) Defaults to `true`.
     */
    public readonly communicationExecutionNotifications!: pulumi.Output<boolean | undefined>;
    /**
     * A string value denoting the slack workspace where notifications related to the object should be sent to.
     */
    public readonly communicationWorkspace!: pulumi.Output<string | undefined>;
    /**
     * The downloaded (JSON) representation of a Notebook.
     */
    public readonly data!: pulumi.Output<string | undefined>;
    /**
     * A user-friendly explanation of an object.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * List of users who can edit the object (with configure permission). Empty maps to all users.
     */
    public readonly editors!: pulumi.Output<string[] | undefined>;
    /**
     * A boolean value denoting whether or not cell outputs should be persisted when running a notebook Defaults to `true`.
     */
    public readonly isRunOutputPersisted!: pulumi.Output<boolean | undefined>;
    /**
     * A list of strings by which notebooks can be grouped.
     */
    public readonly labels!: pulumi.Output<string[] | undefined>;
    /**
     * The name/symbol for the object within Shoreline and the op language (must be unique, only alphanumeric/underscore).
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * **Deprecated** Please use 'allowed_resources_query' instead. A set of Resources (e.g. host, pod, container), optionally
     * filtered on tags or dynamic conditions.
     *
     * @deprecated Deprecated
     */
    public readonly resourceQuery!: pulumi.Output<string | undefined>;
    /**
     * Defaults to `60000`.
     */
    public readonly timeoutMs!: pulumi.Output<number | undefined>;
    /**
     * The type of object (i.e., Alarm, Action, Bot, Metric, Resource, or File).
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Notebook resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: NotebookArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NotebookArgs | NotebookState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NotebookState | undefined;
            resourceInputs["allowedEntities"] = state ? state.allowedEntities : undefined;
            resourceInputs["allowedResourcesQuery"] = state ? state.allowedResourcesQuery : undefined;
            resourceInputs["approvers"] = state ? state.approvers : undefined;
            resourceInputs["communicationApprovalNotifications"] = state ? state.communicationApprovalNotifications : undefined;
            resourceInputs["communicationChannel"] = state ? state.communicationChannel : undefined;
            resourceInputs["communicationCudNotifications"] = state ? state.communicationCudNotifications : undefined;
            resourceInputs["communicationExecutionNotifications"] = state ? state.communicationExecutionNotifications : undefined;
            resourceInputs["communicationWorkspace"] = state ? state.communicationWorkspace : undefined;
            resourceInputs["data"] = state ? state.data : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["editors"] = state ? state.editors : undefined;
            resourceInputs["isRunOutputPersisted"] = state ? state.isRunOutputPersisted : undefined;
            resourceInputs["labels"] = state ? state.labels : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["resourceQuery"] = state ? state.resourceQuery : undefined;
            resourceInputs["timeoutMs"] = state ? state.timeoutMs : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as NotebookArgs | undefined;
            resourceInputs["allowedEntities"] = args ? args.allowedEntities : undefined;
            resourceInputs["allowedResourcesQuery"] = args ? args.allowedResourcesQuery : undefined;
            resourceInputs["approvers"] = args ? args.approvers : undefined;
            resourceInputs["communicationApprovalNotifications"] = args ? args.communicationApprovalNotifications : undefined;
            resourceInputs["communicationChannel"] = args ? args.communicationChannel : undefined;
            resourceInputs["communicationCudNotifications"] = args ? args.communicationCudNotifications : undefined;
            resourceInputs["communicationExecutionNotifications"] = args ? args.communicationExecutionNotifications : undefined;
            resourceInputs["communicationWorkspace"] = args ? args.communicationWorkspace : undefined;
            resourceInputs["data"] = args ? args.data : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["editors"] = args ? args.editors : undefined;
            resourceInputs["isRunOutputPersisted"] = args ? args.isRunOutputPersisted : undefined;
            resourceInputs["labels"] = args ? args.labels : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceQuery"] = args ? args.resourceQuery : undefined;
            resourceInputs["timeoutMs"] = args ? args.timeoutMs : undefined;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Notebook.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Notebook resources.
 */
export interface NotebookState {
    /**
     * The list of users who can run an action or notebook. Any user can run if left empty.
     */
    allowedEntities?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The list of resources on which an action or notebook can run. No restriction, if left empty.
     */
    allowedResourcesQuery?: pulumi.Input<string>;
    approvers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Enables slack notifications for approvals operations. (Requires workspace and channel.) Defaults to `true`.
     */
    communicationApprovalNotifications?: pulumi.Input<boolean>;
    /**
     * A string value denoting the slack channel where notifications related to the object should be sent to.
     */
    communicationChannel?: pulumi.Input<string>;
    /**
     * Enables slack notifications for create/update/delete operations. (Requires workspace and channel.) Defaults to `true`.
     */
    communicationCudNotifications?: pulumi.Input<boolean>;
    /**
     * Enables slack notifications for the object executions. (Requires workspace and channel.) Defaults to `true`.
     */
    communicationExecutionNotifications?: pulumi.Input<boolean>;
    /**
     * A string value denoting the slack workspace where notifications related to the object should be sent to.
     */
    communicationWorkspace?: pulumi.Input<string>;
    /**
     * The downloaded (JSON) representation of a Notebook.
     */
    data?: pulumi.Input<string>;
    /**
     * A user-friendly explanation of an object.
     */
    description?: pulumi.Input<string>;
    /**
     * List of users who can edit the object (with configure permission). Empty maps to all users.
     */
    editors?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A boolean value denoting whether or not cell outputs should be persisted when running a notebook Defaults to `true`.
     */
    isRunOutputPersisted?: pulumi.Input<boolean>;
    /**
     * A list of strings by which notebooks can be grouped.
     */
    labels?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name/symbol for the object within Shoreline and the op language (must be unique, only alphanumeric/underscore).
     */
    name?: pulumi.Input<string>;
    /**
     * **Deprecated** Please use 'allowed_resources_query' instead. A set of Resources (e.g. host, pod, container), optionally
     * filtered on tags or dynamic conditions.
     *
     * @deprecated Deprecated
     */
    resourceQuery?: pulumi.Input<string>;
    /**
     * Defaults to `60000`.
     */
    timeoutMs?: pulumi.Input<number>;
    /**
     * The type of object (i.e., Alarm, Action, Bot, Metric, Resource, or File).
     */
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Notebook resource.
 */
export interface NotebookArgs {
    /**
     * The list of users who can run an action or notebook. Any user can run if left empty.
     */
    allowedEntities?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The list of resources on which an action or notebook can run. No restriction, if left empty.
     */
    allowedResourcesQuery?: pulumi.Input<string>;
    approvers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Enables slack notifications for approvals operations. (Requires workspace and channel.) Defaults to `true`.
     */
    communicationApprovalNotifications?: pulumi.Input<boolean>;
    /**
     * A string value denoting the slack channel where notifications related to the object should be sent to.
     */
    communicationChannel?: pulumi.Input<string>;
    /**
     * Enables slack notifications for create/update/delete operations. (Requires workspace and channel.) Defaults to `true`.
     */
    communicationCudNotifications?: pulumi.Input<boolean>;
    /**
     * Enables slack notifications for the object executions. (Requires workspace and channel.) Defaults to `true`.
     */
    communicationExecutionNotifications?: pulumi.Input<boolean>;
    /**
     * A string value denoting the slack workspace where notifications related to the object should be sent to.
     */
    communicationWorkspace?: pulumi.Input<string>;
    /**
     * The downloaded (JSON) representation of a Notebook.
     */
    data?: pulumi.Input<string>;
    /**
     * A user-friendly explanation of an object.
     */
    description?: pulumi.Input<string>;
    /**
     * List of users who can edit the object (with configure permission). Empty maps to all users.
     */
    editors?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A boolean value denoting whether or not cell outputs should be persisted when running a notebook Defaults to `true`.
     */
    isRunOutputPersisted?: pulumi.Input<boolean>;
    /**
     * A list of strings by which notebooks can be grouped.
     */
    labels?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name/symbol for the object within Shoreline and the op language (must be unique, only alphanumeric/underscore).
     */
    name?: pulumi.Input<string>;
    /**
     * **Deprecated** Please use 'allowed_resources_query' instead. A set of Resources (e.g. host, pod, container), optionally
     * filtered on tags or dynamic conditions.
     *
     * @deprecated Deprecated
     */
    resourceQuery?: pulumi.Input<string>;
    /**
     * Defaults to `60000`.
     */
    timeoutMs?: pulumi.Input<number>;
}
