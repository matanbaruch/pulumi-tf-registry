// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ClusterDriver extends pulumi.CustomResource {
    /**
     * Get an existing ClusterDriver resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ClusterDriverState, opts?: pulumi.CustomResourceOptions): ClusterDriver {
        return new ClusterDriver(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'rancher2:index/clusterDriver:ClusterDriver';

    /**
     * Returns true if the given object is an instance of ClusterDriver.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ClusterDriver {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ClusterDriver.__pulumiType;
    }

    public readonly active!: pulumi.Output<boolean>;
    public readonly actualUrl!: pulumi.Output<string | undefined>;
    /**
     * Annotations of the resource
     */
    public readonly annotations!: pulumi.Output<{[key: string]: string}>;
    public readonly builtin!: pulumi.Output<boolean>;
    public readonly checksum!: pulumi.Output<string | undefined>;
    /**
     * Labels of the resource
     */
    public readonly labels!: pulumi.Output<{[key: string]: string}>;
    public readonly name!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.ClusterDriverTimeouts | undefined>;
    public readonly uiUrl!: pulumi.Output<string | undefined>;
    public readonly url!: pulumi.Output<string>;
    public readonly whitelistDomains!: pulumi.Output<string[] | undefined>;

    /**
     * Create a ClusterDriver resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ClusterDriverArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ClusterDriverArgs | ClusterDriverState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ClusterDriverState | undefined;
            resourceInputs["active"] = state ? state.active : undefined;
            resourceInputs["actualUrl"] = state ? state.actualUrl : undefined;
            resourceInputs["annotations"] = state ? state.annotations : undefined;
            resourceInputs["builtin"] = state ? state.builtin : undefined;
            resourceInputs["checksum"] = state ? state.checksum : undefined;
            resourceInputs["labels"] = state ? state.labels : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["uiUrl"] = state ? state.uiUrl : undefined;
            resourceInputs["url"] = state ? state.url : undefined;
            resourceInputs["whitelistDomains"] = state ? state.whitelistDomains : undefined;
        } else {
            const args = argsOrState as ClusterDriverArgs | undefined;
            if ((!args || args.active === undefined) && !opts.urn) {
                throw new Error("Missing required property 'active'");
            }
            if ((!args || args.builtin === undefined) && !opts.urn) {
                throw new Error("Missing required property 'builtin'");
            }
            if ((!args || args.url === undefined) && !opts.urn) {
                throw new Error("Missing required property 'url'");
            }
            resourceInputs["active"] = args ? args.active : undefined;
            resourceInputs["actualUrl"] = args ? args.actualUrl : undefined;
            resourceInputs["annotations"] = args ? args.annotations : undefined;
            resourceInputs["builtin"] = args ? args.builtin : undefined;
            resourceInputs["checksum"] = args ? args.checksum : undefined;
            resourceInputs["labels"] = args ? args.labels : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["uiUrl"] = args ? args.uiUrl : undefined;
            resourceInputs["url"] = args ? args.url : undefined;
            resourceInputs["whitelistDomains"] = args ? args.whitelistDomains : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ClusterDriver.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ClusterDriver resources.
 */
export interface ClusterDriverState {
    active?: pulumi.Input<boolean>;
    actualUrl?: pulumi.Input<string>;
    /**
     * Annotations of the resource
     */
    annotations?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    builtin?: pulumi.Input<boolean>;
    checksum?: pulumi.Input<string>;
    /**
     * Labels of the resource
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    name?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ClusterDriverTimeouts>;
    uiUrl?: pulumi.Input<string>;
    url?: pulumi.Input<string>;
    whitelistDomains?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a ClusterDriver resource.
 */
export interface ClusterDriverArgs {
    active: pulumi.Input<boolean>;
    actualUrl?: pulumi.Input<string>;
    /**
     * Annotations of the resource
     */
    annotations?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    builtin: pulumi.Input<boolean>;
    checksum?: pulumi.Input<string>;
    /**
     * Labels of the resource
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    name?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ClusterDriverTimeouts>;
    uiUrl?: pulumi.Input<string>;
    url: pulumi.Input<string>;
    whitelistDomains?: pulumi.Input<pulumi.Input<string>[]>;
}
