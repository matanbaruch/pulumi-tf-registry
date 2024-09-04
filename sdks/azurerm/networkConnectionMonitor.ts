// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class NetworkConnectionMonitor extends pulumi.CustomResource {
    /**
     * Get an existing NetworkConnectionMonitor resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NetworkConnectionMonitorState, opts?: pulumi.CustomResourceOptions): NetworkConnectionMonitor {
        return new NetworkConnectionMonitor(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/networkConnectionMonitor:NetworkConnectionMonitor';

    /**
     * Returns true if the given object is an instance of NetworkConnectionMonitor.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NetworkConnectionMonitor {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NetworkConnectionMonitor.__pulumiType;
    }

    public readonly endpoints!: pulumi.Output<outputs.NetworkConnectionMonitorEndpoint[]>;
    public readonly location!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly networkWatcherId!: pulumi.Output<string>;
    public readonly notes!: pulumi.Output<string | undefined>;
    public readonly outputWorkspaceResourceIds!: pulumi.Output<string[] | undefined>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly testConfigurations!: pulumi.Output<outputs.NetworkConnectionMonitorTestConfiguration[]>;
    public readonly testGroups!: pulumi.Output<outputs.NetworkConnectionMonitorTestGroup[]>;
    public readonly timeouts!: pulumi.Output<outputs.NetworkConnectionMonitorTimeouts | undefined>;

    /**
     * Create a NetworkConnectionMonitor resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetworkConnectionMonitorArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NetworkConnectionMonitorArgs | NetworkConnectionMonitorState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NetworkConnectionMonitorState | undefined;
            resourceInputs["endpoints"] = state ? state.endpoints : undefined;
            resourceInputs["location"] = state ? state.location : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["networkWatcherId"] = state ? state.networkWatcherId : undefined;
            resourceInputs["notes"] = state ? state.notes : undefined;
            resourceInputs["outputWorkspaceResourceIds"] = state ? state.outputWorkspaceResourceIds : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["testConfigurations"] = state ? state.testConfigurations : undefined;
            resourceInputs["testGroups"] = state ? state.testGroups : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as NetworkConnectionMonitorArgs | undefined;
            if ((!args || args.endpoints === undefined) && !opts.urn) {
                throw new Error("Missing required property 'endpoints'");
            }
            if ((!args || args.location === undefined) && !opts.urn) {
                throw new Error("Missing required property 'location'");
            }
            if ((!args || args.networkWatcherId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'networkWatcherId'");
            }
            if ((!args || args.testConfigurations === undefined) && !opts.urn) {
                throw new Error("Missing required property 'testConfigurations'");
            }
            if ((!args || args.testGroups === undefined) && !opts.urn) {
                throw new Error("Missing required property 'testGroups'");
            }
            resourceInputs["endpoints"] = args ? args.endpoints : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["networkWatcherId"] = args ? args.networkWatcherId : undefined;
            resourceInputs["notes"] = args ? args.notes : undefined;
            resourceInputs["outputWorkspaceResourceIds"] = args ? args.outputWorkspaceResourceIds : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["testConfigurations"] = args ? args.testConfigurations : undefined;
            resourceInputs["testGroups"] = args ? args.testGroups : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(NetworkConnectionMonitor.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering NetworkConnectionMonitor resources.
 */
export interface NetworkConnectionMonitorState {
    endpoints?: pulumi.Input<pulumi.Input<inputs.NetworkConnectionMonitorEndpoint>[]>;
    location?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    networkWatcherId?: pulumi.Input<string>;
    notes?: pulumi.Input<string>;
    outputWorkspaceResourceIds?: pulumi.Input<pulumi.Input<string>[]>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    testConfigurations?: pulumi.Input<pulumi.Input<inputs.NetworkConnectionMonitorTestConfiguration>[]>;
    testGroups?: pulumi.Input<pulumi.Input<inputs.NetworkConnectionMonitorTestGroup>[]>;
    timeouts?: pulumi.Input<inputs.NetworkConnectionMonitorTimeouts>;
}

/**
 * The set of arguments for constructing a NetworkConnectionMonitor resource.
 */
export interface NetworkConnectionMonitorArgs {
    endpoints: pulumi.Input<pulumi.Input<inputs.NetworkConnectionMonitorEndpoint>[]>;
    location: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    networkWatcherId: pulumi.Input<string>;
    notes?: pulumi.Input<string>;
    outputWorkspaceResourceIds?: pulumi.Input<pulumi.Input<string>[]>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    testConfigurations: pulumi.Input<pulumi.Input<inputs.NetworkConnectionMonitorTestConfiguration>[]>;
    testGroups: pulumi.Input<pulumi.Input<inputs.NetworkConnectionMonitorTestGroup>[]>;
    timeouts?: pulumi.Input<inputs.NetworkConnectionMonitorTimeouts>;
}
