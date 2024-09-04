// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ContainerAppEnvironmentDaprComponent extends pulumi.CustomResource {
    /**
     * Get an existing ContainerAppEnvironmentDaprComponent resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ContainerAppEnvironmentDaprComponentState, opts?: pulumi.CustomResourceOptions): ContainerAppEnvironmentDaprComponent {
        return new ContainerAppEnvironmentDaprComponent(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/containerAppEnvironmentDaprComponent:ContainerAppEnvironmentDaprComponent';

    /**
     * Returns true if the given object is an instance of ContainerAppEnvironmentDaprComponent.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ContainerAppEnvironmentDaprComponent {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ContainerAppEnvironmentDaprComponent.__pulumiType;
    }

    /**
     * The Dapr Component Type. For example `state.azure.blobstorage`.
     */
    public readonly componentType!: pulumi.Output<string>;
    /**
     * The Container App Managed Environment ID to configure this Dapr component on.
     */
    public readonly containerAppEnvironmentId!: pulumi.Output<string>;
    /**
     * Should the Dapr sidecar to continue initialisation if the component fails to load. Defaults to `false`
     */
    public readonly ignoreErrors!: pulumi.Output<boolean | undefined>;
    /**
     * The component initialisation timeout in ISO8601 format. e.g. `5s`, `2h`, `1m`. Defaults to `5s`.
     */
    public readonly initTimeout!: pulumi.Output<string | undefined>;
    public readonly metadatas!: pulumi.Output<outputs.ContainerAppEnvironmentDaprComponentMetadata[] | undefined>;
    /**
     * The name for this Dapr Component.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * A list of scopes to which this component applies. e.g. a Container App's `dapr.app_id` value.
     */
    public readonly scopes!: pulumi.Output<string[] | undefined>;
    public readonly secrets!: pulumi.Output<outputs.ContainerAppEnvironmentDaprComponentSecret[] | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.ContainerAppEnvironmentDaprComponentTimeouts | undefined>;
    /**
     * The version of the component.
     */
    public readonly version!: pulumi.Output<string>;

    /**
     * Create a ContainerAppEnvironmentDaprComponent resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ContainerAppEnvironmentDaprComponentArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ContainerAppEnvironmentDaprComponentArgs | ContainerAppEnvironmentDaprComponentState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ContainerAppEnvironmentDaprComponentState | undefined;
            resourceInputs["componentType"] = state ? state.componentType : undefined;
            resourceInputs["containerAppEnvironmentId"] = state ? state.containerAppEnvironmentId : undefined;
            resourceInputs["ignoreErrors"] = state ? state.ignoreErrors : undefined;
            resourceInputs["initTimeout"] = state ? state.initTimeout : undefined;
            resourceInputs["metadatas"] = state ? state.metadatas : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["scopes"] = state ? state.scopes : undefined;
            resourceInputs["secrets"] = state ? state.secrets : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["version"] = state ? state.version : undefined;
        } else {
            const args = argsOrState as ContainerAppEnvironmentDaprComponentArgs | undefined;
            if ((!args || args.componentType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'componentType'");
            }
            if ((!args || args.containerAppEnvironmentId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'containerAppEnvironmentId'");
            }
            if ((!args || args.version === undefined) && !opts.urn) {
                throw new Error("Missing required property 'version'");
            }
            resourceInputs["componentType"] = args ? args.componentType : undefined;
            resourceInputs["containerAppEnvironmentId"] = args ? args.containerAppEnvironmentId : undefined;
            resourceInputs["ignoreErrors"] = args ? args.ignoreErrors : undefined;
            resourceInputs["initTimeout"] = args ? args.initTimeout : undefined;
            resourceInputs["metadatas"] = args ? args.metadatas : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["scopes"] = args ? args.scopes : undefined;
            resourceInputs["secrets"] = args ? args.secrets : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["version"] = args ? args.version : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ContainerAppEnvironmentDaprComponent.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ContainerAppEnvironmentDaprComponent resources.
 */
export interface ContainerAppEnvironmentDaprComponentState {
    /**
     * The Dapr Component Type. For example `state.azure.blobstorage`.
     */
    componentType?: pulumi.Input<string>;
    /**
     * The Container App Managed Environment ID to configure this Dapr component on.
     */
    containerAppEnvironmentId?: pulumi.Input<string>;
    /**
     * Should the Dapr sidecar to continue initialisation if the component fails to load. Defaults to `false`
     */
    ignoreErrors?: pulumi.Input<boolean>;
    /**
     * The component initialisation timeout in ISO8601 format. e.g. `5s`, `2h`, `1m`. Defaults to `5s`.
     */
    initTimeout?: pulumi.Input<string>;
    metadatas?: pulumi.Input<pulumi.Input<inputs.ContainerAppEnvironmentDaprComponentMetadata>[]>;
    /**
     * The name for this Dapr Component.
     */
    name?: pulumi.Input<string>;
    /**
     * A list of scopes to which this component applies. e.g. a Container App's `dapr.app_id` value.
     */
    scopes?: pulumi.Input<pulumi.Input<string>[]>;
    secrets?: pulumi.Input<pulumi.Input<inputs.ContainerAppEnvironmentDaprComponentSecret>[]>;
    timeouts?: pulumi.Input<inputs.ContainerAppEnvironmentDaprComponentTimeouts>;
    /**
     * The version of the component.
     */
    version?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ContainerAppEnvironmentDaprComponent resource.
 */
export interface ContainerAppEnvironmentDaprComponentArgs {
    /**
     * The Dapr Component Type. For example `state.azure.blobstorage`.
     */
    componentType: pulumi.Input<string>;
    /**
     * The Container App Managed Environment ID to configure this Dapr component on.
     */
    containerAppEnvironmentId: pulumi.Input<string>;
    /**
     * Should the Dapr sidecar to continue initialisation if the component fails to load. Defaults to `false`
     */
    ignoreErrors?: pulumi.Input<boolean>;
    /**
     * The component initialisation timeout in ISO8601 format. e.g. `5s`, `2h`, `1m`. Defaults to `5s`.
     */
    initTimeout?: pulumi.Input<string>;
    metadatas?: pulumi.Input<pulumi.Input<inputs.ContainerAppEnvironmentDaprComponentMetadata>[]>;
    /**
     * The name for this Dapr Component.
     */
    name?: pulumi.Input<string>;
    /**
     * A list of scopes to which this component applies. e.g. a Container App's `dapr.app_id` value.
     */
    scopes?: pulumi.Input<pulumi.Input<string>[]>;
    secrets?: pulumi.Input<pulumi.Input<inputs.ContainerAppEnvironmentDaprComponentSecret>[]>;
    timeouts?: pulumi.Input<inputs.ContainerAppEnvironmentDaprComponentTimeouts>;
    /**
     * The version of the component.
     */
    version: pulumi.Input<string>;
}
