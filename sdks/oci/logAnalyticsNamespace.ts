// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class LogAnalyticsNamespace extends pulumi.CustomResource {
    /**
     * Get an existing LogAnalyticsNamespace resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LogAnalyticsNamespaceState, opts?: pulumi.CustomResourceOptions): LogAnalyticsNamespace {
        return new LogAnalyticsNamespace(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'oci:index/logAnalyticsNamespace:LogAnalyticsNamespace';

    /**
     * Returns true if the given object is an instance of LogAnalyticsNamespace.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LogAnalyticsNamespace {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LogAnalyticsNamespace.__pulumiType;
    }

    public readonly compartmentId!: pulumi.Output<string>;
    public readonly isOnboarded!: pulumi.Output<boolean>;
    public readonly namespace!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.LogAnalyticsNamespaceTimeouts | undefined>;

    /**
     * Create a LogAnalyticsNamespace resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LogAnalyticsNamespaceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LogAnalyticsNamespaceArgs | LogAnalyticsNamespaceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LogAnalyticsNamespaceState | undefined;
            resourceInputs["compartmentId"] = state ? state.compartmentId : undefined;
            resourceInputs["isOnboarded"] = state ? state.isOnboarded : undefined;
            resourceInputs["namespace"] = state ? state.namespace : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as LogAnalyticsNamespaceArgs | undefined;
            if ((!args || args.compartmentId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'compartmentId'");
            }
            if ((!args || args.isOnboarded === undefined) && !opts.urn) {
                throw new Error("Missing required property 'isOnboarded'");
            }
            if ((!args || args.namespace === undefined) && !opts.urn) {
                throw new Error("Missing required property 'namespace'");
            }
            resourceInputs["compartmentId"] = args ? args.compartmentId : undefined;
            resourceInputs["isOnboarded"] = args ? args.isOnboarded : undefined;
            resourceInputs["namespace"] = args ? args.namespace : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(LogAnalyticsNamespace.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering LogAnalyticsNamespace resources.
 */
export interface LogAnalyticsNamespaceState {
    compartmentId?: pulumi.Input<string>;
    isOnboarded?: pulumi.Input<boolean>;
    namespace?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.LogAnalyticsNamespaceTimeouts>;
}

/**
 * The set of arguments for constructing a LogAnalyticsNamespace resource.
 */
export interface LogAnalyticsNamespaceArgs {
    compartmentId: pulumi.Input<string>;
    isOnboarded: pulumi.Input<boolean>;
    namespace: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.LogAnalyticsNamespaceTimeouts>;
}
