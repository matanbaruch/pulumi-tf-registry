// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DownloadKubeconfig extends pulumi.CustomResource {
    /**
     * Get an existing DownloadKubeconfig resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DownloadKubeconfigState, opts?: pulumi.CustomResourceOptions): DownloadKubeconfig {
        return new DownloadKubeconfig(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'rafay:index/downloadKubeconfig:DownloadKubeconfig';

    /**
     * Returns true if the given object is an instance of DownloadKubeconfig.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DownloadKubeconfig {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DownloadKubeconfig.__pulumiType;
    }

    public readonly cluster!: pulumi.Output<string | undefined>;
    public readonly filename!: pulumi.Output<string | undefined>;
    public readonly namespace!: pulumi.Output<string | undefined>;
    public readonly outputFolderPath!: pulumi.Output<string | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.DownloadKubeconfigTimeouts | undefined>;
    public readonly username!: pulumi.Output<string | undefined>;

    /**
     * Create a DownloadKubeconfig resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: DownloadKubeconfigArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DownloadKubeconfigArgs | DownloadKubeconfigState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DownloadKubeconfigState | undefined;
            resourceInputs["cluster"] = state ? state.cluster : undefined;
            resourceInputs["filename"] = state ? state.filename : undefined;
            resourceInputs["namespace"] = state ? state.namespace : undefined;
            resourceInputs["outputFolderPath"] = state ? state.outputFolderPath : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["username"] = state ? state.username : undefined;
        } else {
            const args = argsOrState as DownloadKubeconfigArgs | undefined;
            resourceInputs["cluster"] = args ? args.cluster : undefined;
            resourceInputs["filename"] = args ? args.filename : undefined;
            resourceInputs["namespace"] = args ? args.namespace : undefined;
            resourceInputs["outputFolderPath"] = args ? args.outputFolderPath : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["username"] = args ? args.username : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DownloadKubeconfig.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DownloadKubeconfig resources.
 */
export interface DownloadKubeconfigState {
    cluster?: pulumi.Input<string>;
    filename?: pulumi.Input<string>;
    namespace?: pulumi.Input<string>;
    outputFolderPath?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.DownloadKubeconfigTimeouts>;
    username?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DownloadKubeconfig resource.
 */
export interface DownloadKubeconfigArgs {
    cluster?: pulumi.Input<string>;
    filename?: pulumi.Input<string>;
    namespace?: pulumi.Input<string>;
    outputFolderPath?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.DownloadKubeconfigTimeouts>;
    username?: pulumi.Input<string>;
}
