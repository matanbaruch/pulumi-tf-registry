// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class WorkspaceConnection extends pulumi.CustomResource {
    /**
     * Get an existing WorkspaceConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WorkspaceConnectionState, opts?: pulumi.CustomResourceOptions): WorkspaceConnection {
        return new WorkspaceConnection(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'steampipecloud:index/workspaceConnection:WorkspaceConnection';

    /**
     * Returns true if the given object is an instance of WorkspaceConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WorkspaceConnection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WorkspaceConnection.__pulumiType;
    }

    public /*out*/ readonly associationId!: pulumi.Output<string>;
    public /*out*/ readonly connectionCreatedAt!: pulumi.Output<string>;
    public readonly connectionHandle!: pulumi.Output<string>;
    public /*out*/ readonly connectionId!: pulumi.Output<string>;
    public /*out*/ readonly connectionIdentityId!: pulumi.Output<string>;
    public /*out*/ readonly connectionPlugin!: pulumi.Output<string>;
    public /*out*/ readonly connectionType!: pulumi.Output<string>;
    public /*out*/ readonly connectionUpdatedAt!: pulumi.Output<string>;
    public /*out*/ readonly connectionVersionId!: pulumi.Output<number>;
    public /*out*/ readonly createdAt!: pulumi.Output<string>;
    public readonly createdBy!: pulumi.Output<string>;
    public /*out*/ readonly identityId!: pulumi.Output<string>;
    public readonly organization!: pulumi.Output<string>;
    public /*out*/ readonly updatedAt!: pulumi.Output<string>;
    public readonly updatedBy!: pulumi.Output<string>;
    public /*out*/ readonly versionId!: pulumi.Output<number>;
    public /*out*/ readonly workspaceCreatedAt!: pulumi.Output<string>;
    public /*out*/ readonly workspaceDatabaseName!: pulumi.Output<string>;
    public readonly workspaceHandle!: pulumi.Output<string>;
    public /*out*/ readonly workspaceHive!: pulumi.Output<string>;
    public /*out*/ readonly workspaceHost!: pulumi.Output<string>;
    public /*out*/ readonly workspaceId!: pulumi.Output<string>;
    public /*out*/ readonly workspaceIdentityId!: pulumi.Output<string>;
    public /*out*/ readonly workspacePublicKey!: pulumi.Output<string>;
    public /*out*/ readonly workspaceState!: pulumi.Output<string>;
    public /*out*/ readonly workspaceUpdatedAt!: pulumi.Output<string>;
    public /*out*/ readonly workspaceVersionId!: pulumi.Output<number>;

    /**
     * Create a WorkspaceConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WorkspaceConnectionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: WorkspaceConnectionArgs | WorkspaceConnectionState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as WorkspaceConnectionState | undefined;
            resourceInputs["associationId"] = state ? state.associationId : undefined;
            resourceInputs["connectionCreatedAt"] = state ? state.connectionCreatedAt : undefined;
            resourceInputs["connectionHandle"] = state ? state.connectionHandle : undefined;
            resourceInputs["connectionId"] = state ? state.connectionId : undefined;
            resourceInputs["connectionIdentityId"] = state ? state.connectionIdentityId : undefined;
            resourceInputs["connectionPlugin"] = state ? state.connectionPlugin : undefined;
            resourceInputs["connectionType"] = state ? state.connectionType : undefined;
            resourceInputs["connectionUpdatedAt"] = state ? state.connectionUpdatedAt : undefined;
            resourceInputs["connectionVersionId"] = state ? state.connectionVersionId : undefined;
            resourceInputs["createdAt"] = state ? state.createdAt : undefined;
            resourceInputs["createdBy"] = state ? state.createdBy : undefined;
            resourceInputs["identityId"] = state ? state.identityId : undefined;
            resourceInputs["organization"] = state ? state.organization : undefined;
            resourceInputs["updatedAt"] = state ? state.updatedAt : undefined;
            resourceInputs["updatedBy"] = state ? state.updatedBy : undefined;
            resourceInputs["versionId"] = state ? state.versionId : undefined;
            resourceInputs["workspaceCreatedAt"] = state ? state.workspaceCreatedAt : undefined;
            resourceInputs["workspaceDatabaseName"] = state ? state.workspaceDatabaseName : undefined;
            resourceInputs["workspaceHandle"] = state ? state.workspaceHandle : undefined;
            resourceInputs["workspaceHive"] = state ? state.workspaceHive : undefined;
            resourceInputs["workspaceHost"] = state ? state.workspaceHost : undefined;
            resourceInputs["workspaceId"] = state ? state.workspaceId : undefined;
            resourceInputs["workspaceIdentityId"] = state ? state.workspaceIdentityId : undefined;
            resourceInputs["workspacePublicKey"] = state ? state.workspacePublicKey : undefined;
            resourceInputs["workspaceState"] = state ? state.workspaceState : undefined;
            resourceInputs["workspaceUpdatedAt"] = state ? state.workspaceUpdatedAt : undefined;
            resourceInputs["workspaceVersionId"] = state ? state.workspaceVersionId : undefined;
        } else {
            const args = argsOrState as WorkspaceConnectionArgs | undefined;
            if ((!args || args.connectionHandle === undefined) && !opts.urn) {
                throw new Error("Missing required property 'connectionHandle'");
            }
            if ((!args || args.workspaceHandle === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceHandle'");
            }
            resourceInputs["connectionHandle"] = args ? args.connectionHandle : undefined;
            resourceInputs["createdBy"] = args ? args.createdBy : undefined;
            resourceInputs["organization"] = args ? args.organization : undefined;
            resourceInputs["updatedBy"] = args ? args.updatedBy : undefined;
            resourceInputs["workspaceHandle"] = args ? args.workspaceHandle : undefined;
            resourceInputs["associationId"] = undefined /*out*/;
            resourceInputs["connectionCreatedAt"] = undefined /*out*/;
            resourceInputs["connectionId"] = undefined /*out*/;
            resourceInputs["connectionIdentityId"] = undefined /*out*/;
            resourceInputs["connectionPlugin"] = undefined /*out*/;
            resourceInputs["connectionType"] = undefined /*out*/;
            resourceInputs["connectionUpdatedAt"] = undefined /*out*/;
            resourceInputs["connectionVersionId"] = undefined /*out*/;
            resourceInputs["createdAt"] = undefined /*out*/;
            resourceInputs["identityId"] = undefined /*out*/;
            resourceInputs["updatedAt"] = undefined /*out*/;
            resourceInputs["versionId"] = undefined /*out*/;
            resourceInputs["workspaceCreatedAt"] = undefined /*out*/;
            resourceInputs["workspaceDatabaseName"] = undefined /*out*/;
            resourceInputs["workspaceHive"] = undefined /*out*/;
            resourceInputs["workspaceHost"] = undefined /*out*/;
            resourceInputs["workspaceId"] = undefined /*out*/;
            resourceInputs["workspaceIdentityId"] = undefined /*out*/;
            resourceInputs["workspacePublicKey"] = undefined /*out*/;
            resourceInputs["workspaceState"] = undefined /*out*/;
            resourceInputs["workspaceUpdatedAt"] = undefined /*out*/;
            resourceInputs["workspaceVersionId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["workspacePublicKey"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(WorkspaceConnection.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering WorkspaceConnection resources.
 */
export interface WorkspaceConnectionState {
    associationId?: pulumi.Input<string>;
    connectionCreatedAt?: pulumi.Input<string>;
    connectionHandle?: pulumi.Input<string>;
    connectionId?: pulumi.Input<string>;
    connectionIdentityId?: pulumi.Input<string>;
    connectionPlugin?: pulumi.Input<string>;
    connectionType?: pulumi.Input<string>;
    connectionUpdatedAt?: pulumi.Input<string>;
    connectionVersionId?: pulumi.Input<number>;
    createdAt?: pulumi.Input<string>;
    createdBy?: pulumi.Input<string>;
    identityId?: pulumi.Input<string>;
    organization?: pulumi.Input<string>;
    updatedAt?: pulumi.Input<string>;
    updatedBy?: pulumi.Input<string>;
    versionId?: pulumi.Input<number>;
    workspaceCreatedAt?: pulumi.Input<string>;
    workspaceDatabaseName?: pulumi.Input<string>;
    workspaceHandle?: pulumi.Input<string>;
    workspaceHive?: pulumi.Input<string>;
    workspaceHost?: pulumi.Input<string>;
    workspaceId?: pulumi.Input<string>;
    workspaceIdentityId?: pulumi.Input<string>;
    workspacePublicKey?: pulumi.Input<string>;
    workspaceState?: pulumi.Input<string>;
    workspaceUpdatedAt?: pulumi.Input<string>;
    workspaceVersionId?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a WorkspaceConnection resource.
 */
export interface WorkspaceConnectionArgs {
    connectionHandle: pulumi.Input<string>;
    createdBy?: pulumi.Input<string>;
    organization?: pulumi.Input<string>;
    updatedBy?: pulumi.Input<string>;
    workspaceHandle: pulumi.Input<string>;
}
