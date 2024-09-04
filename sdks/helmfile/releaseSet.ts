// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ReleaseSet extends pulumi.CustomResource {
    /**
     * Get an existing ReleaseSet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ReleaseSetState, opts?: pulumi.CustomResourceOptions): ReleaseSet {
        return new ReleaseSet(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'helmfile:index/releaseSet:ReleaseSet';

    /**
     * Returns true if the given object is an instance of ReleaseSet.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ReleaseSet {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ReleaseSet.__pulumiType;
    }

    public /*out*/ readonly applyOutput!: pulumi.Output<string>;
    public readonly awsAssumeRole!: pulumi.Output<outputs.ReleaseSetAwsAssumeRole | undefined>;
    public readonly awsProfile!: pulumi.Output<string | undefined>;
    public readonly awsRegion!: pulumi.Output<string | undefined>;
    public readonly binary!: pulumi.Output<string | undefined>;
    public readonly concurrency!: pulumi.Output<number | undefined>;
    public readonly content!: pulumi.Output<string | undefined>;
    public /*out*/ readonly diffOutput!: pulumi.Output<string>;
    public readonly dirty!: pulumi.Output<boolean | undefined>;
    public readonly environment!: pulumi.Output<string | undefined>;
    public readonly environmentVariables!: pulumi.Output<{[key: string]: string} | undefined>;
    public /*out*/ readonly error!: pulumi.Output<string>;
    public readonly helmBinary!: pulumi.Output<string | undefined>;
    public readonly helmDiffVersion!: pulumi.Output<string | undefined>;
    public readonly helmVersion!: pulumi.Output<string | undefined>;
    public readonly kubeconfig!: pulumi.Output<string>;
    public readonly path!: pulumi.Output<string | undefined>;
    public readonly releasesValues!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly selector!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly selectors!: pulumi.Output<string[] | undefined>;
    public readonly skipDiffOnMissingFiles!: pulumi.Output<string[] | undefined>;
    public readonly values!: pulumi.Output<string[] | undefined>;
    public readonly valuesFiles!: pulumi.Output<string[] | undefined>;
    public readonly version!: pulumi.Output<string | undefined>;
    public readonly workingDirectory!: pulumi.Output<string | undefined>;

    /**
     * Create a ReleaseSet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ReleaseSetArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ReleaseSetArgs | ReleaseSetState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ReleaseSetState | undefined;
            resourceInputs["applyOutput"] = state ? state.applyOutput : undefined;
            resourceInputs["awsAssumeRole"] = state ? state.awsAssumeRole : undefined;
            resourceInputs["awsProfile"] = state ? state.awsProfile : undefined;
            resourceInputs["awsRegion"] = state ? state.awsRegion : undefined;
            resourceInputs["binary"] = state ? state.binary : undefined;
            resourceInputs["concurrency"] = state ? state.concurrency : undefined;
            resourceInputs["content"] = state ? state.content : undefined;
            resourceInputs["diffOutput"] = state ? state.diffOutput : undefined;
            resourceInputs["dirty"] = state ? state.dirty : undefined;
            resourceInputs["environment"] = state ? state.environment : undefined;
            resourceInputs["environmentVariables"] = state ? state.environmentVariables : undefined;
            resourceInputs["error"] = state ? state.error : undefined;
            resourceInputs["helmBinary"] = state ? state.helmBinary : undefined;
            resourceInputs["helmDiffVersion"] = state ? state.helmDiffVersion : undefined;
            resourceInputs["helmVersion"] = state ? state.helmVersion : undefined;
            resourceInputs["kubeconfig"] = state ? state.kubeconfig : undefined;
            resourceInputs["path"] = state ? state.path : undefined;
            resourceInputs["releasesValues"] = state ? state.releasesValues : undefined;
            resourceInputs["selector"] = state ? state.selector : undefined;
            resourceInputs["selectors"] = state ? state.selectors : undefined;
            resourceInputs["skipDiffOnMissingFiles"] = state ? state.skipDiffOnMissingFiles : undefined;
            resourceInputs["values"] = state ? state.values : undefined;
            resourceInputs["valuesFiles"] = state ? state.valuesFiles : undefined;
            resourceInputs["version"] = state ? state.version : undefined;
            resourceInputs["workingDirectory"] = state ? state.workingDirectory : undefined;
        } else {
            const args = argsOrState as ReleaseSetArgs | undefined;
            if ((!args || args.kubeconfig === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kubeconfig'");
            }
            resourceInputs["awsAssumeRole"] = args ? args.awsAssumeRole : undefined;
            resourceInputs["awsProfile"] = args ? args.awsProfile : undefined;
            resourceInputs["awsRegion"] = args ? args.awsRegion : undefined;
            resourceInputs["binary"] = args ? args.binary : undefined;
            resourceInputs["concurrency"] = args ? args.concurrency : undefined;
            resourceInputs["content"] = args ? args.content : undefined;
            resourceInputs["dirty"] = args ? args.dirty : undefined;
            resourceInputs["environment"] = args ? args.environment : undefined;
            resourceInputs["environmentVariables"] = args ? args.environmentVariables : undefined;
            resourceInputs["helmBinary"] = args ? args.helmBinary : undefined;
            resourceInputs["helmDiffVersion"] = args ? args.helmDiffVersion : undefined;
            resourceInputs["helmVersion"] = args ? args.helmVersion : undefined;
            resourceInputs["kubeconfig"] = args ? args.kubeconfig : undefined;
            resourceInputs["path"] = args ? args.path : undefined;
            resourceInputs["releasesValues"] = args ? args.releasesValues : undefined;
            resourceInputs["selector"] = args ? args.selector : undefined;
            resourceInputs["selectors"] = args ? args.selectors : undefined;
            resourceInputs["skipDiffOnMissingFiles"] = args ? args.skipDiffOnMissingFiles : undefined;
            resourceInputs["values"] = args ? args.values : undefined;
            resourceInputs["valuesFiles"] = args ? args.valuesFiles : undefined;
            resourceInputs["version"] = args ? args.version : undefined;
            resourceInputs["workingDirectory"] = args ? args.workingDirectory : undefined;
            resourceInputs["applyOutput"] = undefined /*out*/;
            resourceInputs["diffOutput"] = undefined /*out*/;
            resourceInputs["error"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ReleaseSet.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ReleaseSet resources.
 */
export interface ReleaseSetState {
    applyOutput?: pulumi.Input<string>;
    awsAssumeRole?: pulumi.Input<inputs.ReleaseSetAwsAssumeRole>;
    awsProfile?: pulumi.Input<string>;
    awsRegion?: pulumi.Input<string>;
    binary?: pulumi.Input<string>;
    concurrency?: pulumi.Input<number>;
    content?: pulumi.Input<string>;
    diffOutput?: pulumi.Input<string>;
    dirty?: pulumi.Input<boolean>;
    environment?: pulumi.Input<string>;
    environmentVariables?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    error?: pulumi.Input<string>;
    helmBinary?: pulumi.Input<string>;
    helmDiffVersion?: pulumi.Input<string>;
    helmVersion?: pulumi.Input<string>;
    kubeconfig?: pulumi.Input<string>;
    path?: pulumi.Input<string>;
    releasesValues?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    selector?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    selectors?: pulumi.Input<pulumi.Input<string>[]>;
    skipDiffOnMissingFiles?: pulumi.Input<pulumi.Input<string>[]>;
    values?: pulumi.Input<pulumi.Input<string>[]>;
    valuesFiles?: pulumi.Input<pulumi.Input<string>[]>;
    version?: pulumi.Input<string>;
    workingDirectory?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ReleaseSet resource.
 */
export interface ReleaseSetArgs {
    awsAssumeRole?: pulumi.Input<inputs.ReleaseSetAwsAssumeRole>;
    awsProfile?: pulumi.Input<string>;
    awsRegion?: pulumi.Input<string>;
    binary?: pulumi.Input<string>;
    concurrency?: pulumi.Input<number>;
    content?: pulumi.Input<string>;
    dirty?: pulumi.Input<boolean>;
    environment?: pulumi.Input<string>;
    environmentVariables?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    helmBinary?: pulumi.Input<string>;
    helmDiffVersion?: pulumi.Input<string>;
    helmVersion?: pulumi.Input<string>;
    kubeconfig: pulumi.Input<string>;
    path?: pulumi.Input<string>;
    releasesValues?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    selector?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    selectors?: pulumi.Input<pulumi.Input<string>[]>;
    skipDiffOnMissingFiles?: pulumi.Input<pulumi.Input<string>[]>;
    values?: pulumi.Input<pulumi.Input<string>[]>;
    valuesFiles?: pulumi.Input<pulumi.Input<string>[]>;
    version?: pulumi.Input<string>;
    workingDirectory?: pulumi.Input<string>;
}
