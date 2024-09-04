// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class FirebaseProject extends pulumi.CustomResource {
    /**
     * Get an existing FirebaseProject resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FirebaseProjectState, opts?: pulumi.CustomResourceOptions): FirebaseProject {
        return new FirebaseProject(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google-beta:index/firebaseProject:FirebaseProject';

    /**
     * Returns true if the given object is an instance of FirebaseProject.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FirebaseProject {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FirebaseProject.__pulumiType;
    }

    /**
     * The GCP project display name
     */
    public /*out*/ readonly displayName!: pulumi.Output<string>;
    public readonly project!: pulumi.Output<string>;
    /**
     * The number of the google project that firebase is enabled on.
     */
    public /*out*/ readonly projectNumber!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.FirebaseProjectTimeouts | undefined>;

    /**
     * Create a FirebaseProject resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: FirebaseProjectArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FirebaseProjectArgs | FirebaseProjectState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as FirebaseProjectState | undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["projectNumber"] = state ? state.projectNumber : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as FirebaseProjectArgs | undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["projectNumber"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(FirebaseProject.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering FirebaseProject resources.
 */
export interface FirebaseProjectState {
    /**
     * The GCP project display name
     */
    displayName?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    /**
     * The number of the google project that firebase is enabled on.
     */
    projectNumber?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.FirebaseProjectTimeouts>;
}

/**
 * The set of arguments for constructing a FirebaseProject resource.
 */
export interface FirebaseProjectArgs {
    project?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.FirebaseProjectTimeouts>;
}
